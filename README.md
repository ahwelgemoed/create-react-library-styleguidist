# How and what this is

This is a job lot of boilerplate done to add styleguidist to create-react-library

## How To RUN

clone this repo and remove git

run `yarn`

`cd ./example` and run `yarn start` (Normal CRA App)

In root run `yarn start` (runs rollup --watch)

In root run `yarn styleguide` (Runs Styleguide for Docs)

#### This is Split into 3 Sections

_Components_

_Documents_

_Example_

In `'tm/src/components/**'` build the components and Export them all in index.js to make them available for the package

Add a 'Filename.md' for styleguide docs -

Add description of component to `styleguide.config.js` so that stylesguide can show it

```js
  {
    name: 'Button',
    components: 'src/components/Button/*.{js,jsx}'
  }
```

In `'tm/example/\*\*'`is a normal CRA here import Components to views and play with
can be seen as tests but test must also be written

TODO

-- How To Deploy All

--TESTS

```

```
