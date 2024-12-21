# To reproduce
Run `npm run cli-test-unit-run` to run the tests.
This should yield an entry liek this:

```
dates-helpers.ts          |     100 |    97.05 |     100 |     100 | 72
```

Notice the line number (72), this is a comment.

In nuxt.config.ts, commetn out the `@nuxtjs/i18n` module.
Run `npm run cli-test-unit-run` again.

```
dates-helpers.ts          |     100 |    97.05 |     100 |     100 | 174
```

Notice the line number (174) is now correct.
