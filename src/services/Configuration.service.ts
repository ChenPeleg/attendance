import {ServicesResolver} from './provider/ServiceResolverClass.ts';
import {AbstractBaseService} from './provider/AbstractBaseService.ts';

export class ConfigurationService extends AbstractBaseService {
    environment: string;

    constructor(provider: ServicesResolver) {
        super(provider);
        this.environment = import.meta.env.VITE_MODE_NAME
    }

    isDevMode() {
        return this.environment === 'development'
    }

}
