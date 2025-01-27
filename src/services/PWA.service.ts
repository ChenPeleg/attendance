import {ServicesResolver} from './provider/ServiceResolverClass.ts';
import {AbstractBaseService} from './provider/AbstractBaseService.ts';

export class PWAService extends AbstractBaseService {

    constructor(provider: ServicesResolver) {
        super(provider);

    }

    protected init() {

    }
    initPwaButton(buttonElement : HTMLElement ) {
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


}
