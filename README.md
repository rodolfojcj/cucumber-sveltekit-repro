# Reproduce the issue

Run this command:

    npm run test:cucumber

which will show error lines like these:

    Error [ERR_MODULE_NOT_FOUND]: Cannot find package '$app' imported from /issue/cucumber-sveltekit-repro/src/lib/mylib.mjs
        at packageResolve (node:internal/modules/esm/resolve:854:9)
        at moduleResolve (node:internal/modules/esm/resolve:927:18)
        at defaultResolve (node:internal/modules/esm/resolve:1157:11)
        at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:383:12)
        at ModuleLoader.resolve (node:internal/modules/esm/loader:352:25)
        at ModuleLoader.getModuleJob (node:internal/modules/esm/loader:227:38)
        at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:87:39)
        at link (node:internal/modules/esm/module_job:86:36) {
      code: 'ERR_MODULE_NOT_FOUND'
    }

# Observed issues

The Cucumber file `features/hello.steps.mjs` can not resolve these paths that come from SvelteKit, like this line:

    import { showBrowser } from '$lib/mylib.mjs'`

which fails showing this:

    Error [ERR_MODULE_NOT_FOUND]: Cannot find package '$lib' imported from /issue/cucumber-sveltekit-repro/features/hello.steps.mjs

or like this other line:

    import { showBrowser } from '../src/lib/mylib.mjs'`

which fails showing this, as showed above:

    Error [ERR_MODULE_NOT_FOUND]: Cannot find package '$app' imported from /issue/cucumber-sveltekit-repro/src/lib/mylib.mjs

