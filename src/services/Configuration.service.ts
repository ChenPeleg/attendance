import {ServicesResolver} from './provider/ServiceResolverClass.ts';
import {AbstractBaseService} from './provider/AbstractBaseService.ts';
import {Environment} from '../models/Environment.ts';

export class ConfigurationService extends AbstractBaseService {
    _environment: Environment;

    constructor(provider: ServicesResolver) {
        super(provider);
        this._environment = this.getEnvironmentFromEnvVar();
    }
    get environment() {
        return this._environment;
    }

    isDevMode() {
        return this._environment === 'development'
    }
    private getEnvironmentFromEnvVar() {
        const envVar =  import.meta.env.VITE_MODE_NAME;
        console.log(envVar)
        switch (envVar) {
            case 'development':
                return Environment.Development;
            case 'production':
                return Environment.Production;
            case 'test':
                return Environment.Test;
            default:
                return Environment.Production;
        }
    }

}
