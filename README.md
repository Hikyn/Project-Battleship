# Project-Battleship

It was tough to set up this project. 

## Problems encountered:

### Jest and webpack
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

### Jest and weird way to catch errors

I wanted to throw an error if ship is placed **Out of Bounds**

There is a syntax that I used:

```js
throw new Error('Out of bounds')
```

And that's how I tried to catch error:

```js
expect(gameboard.placeShip(x, y, shipLength, orientation)).toThrow("Out of bounds");
```

It didn't work, so I tried to read documentation on this function.

Official notes on ".toThrow":

> You must wrap the code in a function, otherwise the error will not be caught and the assertion will fail.

After changing code to this **[Jest](https://jestjs.io/)** started to correctly analyze thrown error:

```js
expect(() => { gameboard.placeShip(x, y, shipLength, orientation); }).toThrow("Out of bounds");
```
