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
    showEmojiJumping() {

        const emojiContainer = document.createElement('div');
        emojiContainer.classList.add('emoji-container');
        const emoji = document.createElement('div');
        emoji.classList.add('emoji-surprise');
        emojiContainer.appendChild(emoji);
        document.body.appendChild(emojiContainer);
        emoji.innerHTML = '🎉';
        if (emojiContainer) {
            emojiContainer.classList.add('jumping');
            setTimeout(() => {
                emojiContainer.classList.remove('jumping');
            }, 3000)
        }
    }


}
