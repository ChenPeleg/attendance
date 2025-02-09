import {ServicesResolver} from './provider/ServiceResolverClass.ts';
import {AbstractBaseService} from './provider/AbstractBaseService.ts';
// @ts-ignore
import {confetti} from '../external/confetti.js'

export class SupersizeAnimationService extends AbstractBaseService {
    constructor(provider: ServicesResolver) {
        super(provider);
    }

    showConfetti() {
        this.showEmojiJumping();
        confetti.start();
        setTimeout(() => {

            confetti.stop();
        }, 3000)
    }

    showEmojiJumping() {
        let clickCount = 0;

        const emojiContainer = document.createElement('div');
        emojiContainer.classList.add('emoji-container');
        emojiContainer.innerHTML = `<div class="emoji-and-text"  >
                                        <div class="emoji-surprise"> ${this.randomCuteEmoji()}
                                        </div>
                                        <div class="text">${this.randomAmazingHebrewWord()}</div>
                                     </div>`;
        emojiContainer.addEventListener('click', () => {
            clickCount++;
            // make the image larger
            emojiContainer.style.transform =  `scale(${1.1 + clickCount * 0.3})`
            if (clickCount >= 3) {
                emojiContainer.remove()
            }

        })
        document.body.appendChild(emojiContainer);
        const removeEmoji = () => {
            emojiContainer.remove()
        }

        if (emojiContainer) {
            emojiContainer.classList.add('jumping');
            setTimeout(() => {
                removeEmoji()
            }, 5000)
        }
    }

    private randomAmazingHebrewWord() {
        const amazingWords = ['כל הכבוד', 'נהדר', 'מדהים', 'מופלא', 'נפלא', 'מרהיב', 'מרשים', 'מעולה', 'יופי', 'הצלחת', 'איזה כיף', 'אליפות', 'אין עליך', 'מצויין'];
        return `${amazingWords[Math.floor(Math.random() * amazingWords.length)]} !`;
    }

    private randomCuteEmoji() {
        const cuteEmojis = ['🐶', '🍭', '🍨', '🎂', '🌞', '🏅', '🏆', '🎉', '🎁', '🪅', '🧸', '👑', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🐦', '🐤', '🐥', '🦉', '🐴', '🦄', '🐝', '🦋', '🐌', '🐞', '🐢', '🦖', '🦕', '🐙', '🦑', '🦐', '🦞', '🐡', '🐠', '🐟', '🐬', '🐳', '🦓', '🦍', '🦧', '🦛', '🐫', '🦒', '🦘', '🦙', '🦌', '🦝', '🦨', '🦡', '🦦', '🦥', '🦮', '🐕', '🐕‍🦺', '🦤', '🦩'];
        return cuteEmojis[Math.floor(Math.random() * cuteEmojis.length)];

    }


}
