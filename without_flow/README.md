# [_Put your project name here_]

[_Add a brief description of your project here._]

## npm script commands

- `npm start`: Runs the app in development mode. Open [http://localhost:3000/](http://localhost:3000/) to
  view it in the browser. The page will reload if you make edits. You will see the build errors in the console.
- `npm test`: Runs the test watcher in an interactive mode. By default, runs tests related to files changes
  since the last commit.
- `npm run build`: Builds the app for production to the build folder. It correctly bundles React in production mode
  and optimizes the build for the best performance. The build is minified and the filenames include the hashes.
  Your app is ready to be deployed!
- `npm run lint`: Lints all javascript using [`eslint-config-skyscanner-with-prettier`](https://www.npmjs.com/package/eslint-config-skyscanner-with-prettier).

## `backpack-react-scripts`
 *This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) +
  [backpack-react-scripts](https://github.com/Skyscanner/backpack-react-scripts/tree/master/packages/react-scripts).*
  It is very similar to one that you would create using [Create React App](https://github.com/facebookincubator/create-react-app)
  without [backpack-react-scripts](https://github.com/Skyscanner/backpack-react-scripts/tree/master/packages/react-scripts),
  so please refer to [it's documentation](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)
  for more usage information.


## CSS Modules

All Sass files are by default treated as [CSS Modules](https://github.com/css-modules/css-modules). You can opt out of this behaviour using the following config option:

```
"backpack-react-scripts": {
  "cssModules": false
}
```

If you decide to opt out, Sass files will not be treated as CSS Modules by default. However, you can opt-in on a per-file basis using the naming convention: `*.module.scss`.

For example, with `cssModules` set to `false`:
- The file `App.scss` will not be treated as CSS Module
- The file `App.module.scss` _will_ be treated as CSS Module

This allows you to upgrade your project file by file to CSS Modules.

> Backpack components will _always_ be treated as CSS Modules, even if you opt out
