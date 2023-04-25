# Project-Battleship

It was tough to set up this project. 

# ToC

-   [Problems Encountered](https://github.com/Hikyn/Project-Battleship/edit/main/README.md#problems-encountered)
    -   [Jest and webpack](https://github.com/Hikyn/Project-Battleship/edit/main/README.md#problems-encountered)
    -   [Jest and weird way to catch errors](https://github.com/Hikyn/Project-Battleship/edit/main/README.md#jest-and-weird-way-to-catch-errors)
-   [Main game loop](https://github.com/Hikyn/Project-Battleship/edit/main/README.md#main-game-loop)
    -   [Start](https://github.com/Hikyn/Project-Battleship/edit/main/README.md#start)
    -   [Ship placement](https://github.com/Hikyn/Project-Battleship/edit/main/README.md#ship-placement)
    -   [Taking turns](https://github.com/Hikyn/Project-Battleship/edit/main/README.md#taking-turns)

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

> The issue here is that before Jest even knows anything about throwing an exception, we've already thrown it. An exception in that context will stop execution and fail. When we wrap it in an arrow function, we're not actually executing it yet and Jest can prepare for the exception 
> 
> --- **[scorgn](https://stackoverflow.com/users/2087587/scorgn)** on [this thread](https://stackoverflow.com/questions/49027595/jest-test-that-exception-will-be-thrown-isnt-working)

## Main game loop

### Start
```
1. Welcome screen with option to choose playing versus computer or versus player

    1.1. Inputting player1 name and player2 name

    1.2. Choosing gameboard length

    1.3. Submit to start a game. First player selected randomly
```
### Ship placement
```
2. Placing ships

    2.1. Player can place ships by selecting ship model 
                            and drag-dropping it on gameboard

    2.2. After every ship is placed, this function is disabled
```

```
3. AI places ships

    3.1. AI randomly randoms coordinates and tries to place ship here. 
    
    3.2. If it encounters placement error, it tries again with a new coordinate
```
### Taking turns
```
4. Taking turns (vs real player)
 
    4.1. Current player name shows on screen

    4.2. Current player selects coordinates to shoot

    4.3. He sees result of the shot

    4.4. After small delay, turn passed to second player
```

```
5. Taking turns (vs computer)
 
    5.1. Player selects coordinates to shoot

    5.2. He sees result of the shot

    5.3. After small delay, he sees how computer shots at his tiles
```
