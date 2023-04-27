import './style.css';
import { shipFactory } from './shipFactory';
import { gameboardFactory } from './gameboardFactory';
import { playerFactory } from './playerFactory';
import { renderer } from './renderer';
import { gameloop } from './gameLoop.js';

console.log('Scripts are working');

gameloop(7);
