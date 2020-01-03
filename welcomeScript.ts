import { t } from 'testcafe';
export class WelcomeScript {
    async launchwelcomepage () {
        console.log('Welcome page loaded');
        await t.debug();
    }
}
