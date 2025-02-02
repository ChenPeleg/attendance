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


}
