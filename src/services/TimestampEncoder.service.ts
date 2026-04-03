import {AbstractBaseService} from './provider/AbstractBaseService.ts';
import {ServicesResolver} from './provider/ServiceResolverClass.ts';

/**
 * Service responsible for encoding and decoding timestamps.
 * Uses 16-bit encoding with 5-minute resolution.
 * Handles clock skew with a 24-hour future buffer.
 */
export class TimestampEncoderService extends AbstractBaseService {
    private static readonly FIVE_MINUTES = 5 * 60 * 1000;
    // Buffer to handle clock skew (sender slightly in future relative to receiver)
    // or if the timestamp is legitimately slightly in the future.
    // 288 * 5 mins = 24 hours.
    private static readonly FUTURE_BUFFER = 288;

    constructor(provider: ServicesResolver) {
        super(provider);
    }

    /**
     * Encodes timestamps into a compact binary format.
     * @param current - Current timestamp in milliseconds
     * @param history - Array of historical timestamps in milliseconds
     * @returns Base64 encoded string
     */
    public encodeTime(current: number, history: number[]): string {
        const timestamps = [current, ...history].map(ts => Math.round(ts / TimestampEncoderService.FIVE_MINUTES));
        const buffer = new ArrayBuffer(timestamps.length * 2);
        const view = new DataView(buffer);
        timestamps.forEach((ts, index) => {
            view.setUint16(index * 2, ts & 0xFFFF, true);
        });
        const byteArray = new Uint8Array(buffer);
        return btoa(String.fromCharCode(...byteArray));
    }

    /**
     * Decodes a base64 string into timestamps.
     * @param encodedState - Base64 encoded string
     * @returns Object with current timestamp and history array
     * @throws Error if decoding fails
     */
    public decodeTime(encodedState: string): { current: number, history: number[] } {
        try {
            const binaryString = atob(encodedState);
            const byteArray = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                byteArray[i] = binaryString.charCodeAt(i);
            }
            const view = new DataView(byteArray.buffer);
            const timestamps: number[] = [];

            const now = Date.now();
            const currentIntervals = Math.round(now / TimestampEncoderService.FIVE_MINUTES);
            const highBits = currentIntervals & ~0xFFFF;

            for (let i = 0; i < byteArray.length / 2; i++) {
                const lowBits = view.getUint16(i * 2, true);
                let reconstructed = highBits | lowBits;

                // If reconstructed is significantly in the future relative to now,
                // it implies the lowBits correspond to the previous cycle of highBits.
                // (e.g. now is just past a 65536 boundary, but timestamp is from just before it)
                if (reconstructed > currentIntervals + TimestampEncoderService.FUTURE_BUFFER) {
                    reconstructed -= 0x10000;
                }

                timestamps.push(reconstructed * TimestampEncoderService.FIVE_MINUTES);
            }

            if (timestamps.length === 0) {
                return { current: 0, history: [] };
            }

            return {
                current: timestamps[0],
                history: timestamps.slice(1)
            };
        } catch (e) {
            console.error('Failed to decode time', e);
            throw e;
        }
    }
}
