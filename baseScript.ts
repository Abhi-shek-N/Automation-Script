import { WelcomeScript } from './welcomeScript';

const URL = 'https://purchase.allstate.com/onlineshopping/welcome';

fixture('Welcome script')
.page(URL)
.beforeEach(async (t) => {
    await t.maximizeWindow();
});

const welcomeScript = new WelcomeScript();
test('Automation Script', async t => {
    await welcomeScript.launchwelcomepage();
});
