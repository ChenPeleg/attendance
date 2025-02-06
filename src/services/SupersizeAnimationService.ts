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
    private randomAmazingHebrewWord() {

       const amazingWords = [
           'כל הכבוד',
           'נהדר',
           'מדהים'
           , 'מופלא',
           'נפלא',
           'מרהיב',
           'מרשים',
           'מעולה',
           'יופי',
           'הצלחת',
           'איזה כיף',
           'אליפות', 'אין עליך'
       ];
         return `${amazingWords[Math.floor(Math.random() * amazingWords.length)]} !`;


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
                                        <div class="text">${this.randomAmazingHebrewWord()}</div>
                                     </div>`;
        document.body.appendChild(emojiContainer);

        if (emojiContainer) {
            emojiContainer.classList.add('jumping');
            setTimeout(() => {
                emojiContainer.remove()
            }, 5000)
        }
    }


}
