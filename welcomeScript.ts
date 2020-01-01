import { BaseScript } from '../Testcafe/baseScript'

const URL = '';
console.log('This is welcome script');

fixture('Welcome script')
.page(URL)
.beforeEach(async (t) => {
    await t.maximizeWindow();
});