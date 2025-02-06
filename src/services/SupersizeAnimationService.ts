import {ServicesResolver} from './provider/ServiceResolverClass.ts';
import {AbstractBaseService} from './provider/AbstractBaseService.ts';
// @ts-ignore
import {confetti} from '../external/confetti.js'

export class SupersizeAnimationService extends AbstractBaseService {
    constructor(provider: ServicesResolver) {
        super(provider);
    }

    showConfetti() {

        confetti.start();
        setTimeout(() => {

            confetti.stop();
        }, 3000)
    }
    private randomCuteEmoji() {
        const cuteEmojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🐦', '🐤', '🐥', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞', '🐜', '🦗', '🕷', '🦂', '🦟', '🦠', '🐢', '🐍', '🦎', '🦖', '🦕', '🐙', '🦑', '🦐', '🦞', '🦀', '🐡', '🐠', '🐟', '🐬', '🐳', '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🦧', '🦣', '🐘', '🦛', '🦏', '🐪', '🐫', '🦒', '🦘', '🦙', '🦌', '🦍', '🦝', '🦨', '🦡', '🦦', '🦥', '🦮', '🐕', '🦮', '🐕‍🦺', '🦤', '🦩']
        return cuteEmojis[Math.floor(Math.random() * cuteEmojis.length)];

    }

    showEmojiJumping() {

        const emojiContainer = document.createElement('div');
        emojiContainer.classList.add('emoji-container');
        emojiContainer.innerHTML = `<div class="emoji-and-text">
                                        <div class="emoji-surprise"> ${this.randomCuteEmoji()}
                                        </div>
                                        <div class="text">Great!</div>
                                     </div>`;
        document.body.appendChild(emojiContainer);

        if (emojiContainer) {
            emojiContainer.classList.add('jumping');
            setTimeout(() => {
                // emojiContainer.remove()
            }, 3000)
        }
    }


}
