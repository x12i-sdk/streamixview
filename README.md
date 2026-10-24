# @x12i/streamixview usage example

Configurable React view for Streamix activities, messages, and email.

This consuming application demonstrates **render a synthetic activity list without a service connection** using the published npm package, pinned to `0.2.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Embed an activity, message or email view in a React application.
- Configure the viewer for a host application's Streamix data and presentation needs.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/streamixview)
- [Implementation monorepo](https://github.com/x12i/streamix)
- [Reviewed package source](https://github.com/x12i/streamix/tree/b4ab8abd8ac781d2b934a7a864276c5c5509fa6d/packages/view)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Rendered fixture

Run the example, then open its generated `preview.html` or `workflow.svg`. The checks establish static rendering or SVG export for the authored fixture. Browser effects, interactions, responsive layout and deployed service behavior are not covered by this check. The host fixture contains no real customer data.
