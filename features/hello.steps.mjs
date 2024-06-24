import { When } from '@cucumber/cucumber';

// this fails with
// Error [ERR_MODULE_NOT_FOUND]: Cannot find package '$lib' imported from /issue/cucumber-sveltekit-repro/features/hello.steps.mjs
// import { showBrowser } from '$lib/mylib.mjs';

// and this is a workaround ...
import { showBrowser } from '../src/lib/mylib.mjs';

// ... but now it fails with
// Error [ERR_MODULE_NOT_FOUND]: Cannot find package '$app' imported from /issue/cucumber-sveltekit-repro/src/lib/mylib.mjs
// because of the following line in src/lib/mylib.mjs:
//     import { browser } from "$app/environment"


When(
	'the user goes to the home page',
	async function () {
		showBrowser();
	}
);
