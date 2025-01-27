import {ServicesResolver} from './provider/ServiceResolverClass.ts';
import {AbstractBaseService} from './provider/AbstractBaseService.ts';

export enum PWAStatus {
    NotInstalled = 'NotInstalled', Installed = 'Installed', NotSupported = 'NotSupported'
}

export class PWAService extends AbstractBaseService {

    constructor(provider: ServicesResolver) {
        super(provider);

    }

    initPwaButton(buttonElement: HTMLElement) {
        if (window.matchMedia('(display-mode: standalone)').matches) {
            return;
        }
        const installButton = buttonElement
        if (!installButton) {
            throw new Error('install button not found');
        }

        installButton.addEventListener('click', () => {
            // @ts-ignore
            window.deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            // @ts-ignore
            window.deferredPrompt.userChoice
                .then((choiceResult: any) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the A2HS prompt');
                    } else {
                        console.log('User dismissed the A2HS prompt');
                    }
                    // @ts-ignore
                    window.deferredPrompt = null;
                });
        });
        window.addEventListener('beforeinstallprompt', (e) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // Stash the event so it can be triggered later.
            // @ts-ignore
            window.deferredPrompt = e;
            // Update UI notify the user they can add to home screen
            document.body.appendChild(installButton);
        });

    }
    promiseCreatePWA():Promise<Event> {
     return new Promise((resolve, _reject) => {
         window.addEventListener('beforeinstallprompt', (event) => {
             console.log('beforeinstallprompt fired');
             resolve((event));
         });
     })

    }

    promisifiedCheckForPWA(): Promise<PWAStatus> {
        return new Promise((resolve, _reject) => {
            if (this.isPwaSupported()) {
                resolve(PWAStatus.NotInstalled);
            }
            if (this.isInStandaloneMode()) {
                resolve(PWAStatus.Installed);
            }

            resolve(PWAStatus.NotInstalled);



        });
    }

    protected init() {

    }

    private isPwaSupported(): boolean {
        return 'beforeinstallprompt' in window;
    }

    private isInStandaloneMode = () => (window.matchMedia('(display-mode: standalone)').matches)   || document.referrer.includes('android-app://');


}
