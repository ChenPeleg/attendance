import {ServicesResolver} from './provider/ServiceResolverClass.ts';
import {AbstractBaseService} from './provider/AbstractBaseService.ts';

export class BackgroundImageService extends AbstractBaseService {
    static numberOfImages = 7;

    constructor(provider: ServicesResolver) {
        super(provider);
    }
    getImageUrl() {
        const imageNumber = 1 || this.getRandomImageNumber();
        return `url(./images/img (${imageNumber}).jpg)`
    }


    private getRandomImageNumber() {
        return Math.floor(Math.random() * BackgroundImageService.numberOfImages) + 1
    }
}
