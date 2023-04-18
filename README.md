# Project-Battleship

It was tought to set up this project. 

## Problems encountered:
I wanted to implement testing via **[Jest](https://jestjs.io/)**. I split my project into several modules

`example: Separate shipFactory.js for creating ships`

This caused a conflict when I wanted to use modules with **[Jest](https://jestjs.io/)**

**[Jest](https://jestjs.io/)** refused to work with **import** statements.

**[Webpack](https://webpack.js.org/)** refused to work with **require** statements.

I tried a lot to solve this. Eventual solution after a lof of trial and error:
```bash
npm install --save-dev @babel/plugin-transform-modules-commonjs
```
Then installing **babel** and configuring babel.config.json:
```json
{
    "env": {
      "test": {
        "plugins": ["@babel/plugin-transform-modules-commonjs"]
      }
    }
 }
```
All thanks to stackoverflow answer: https://stackoverflow.com/questions/35756479/does-jest-support-es6-import-export
