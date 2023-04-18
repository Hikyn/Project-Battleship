import './style.css';
import './shipFactory.js';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = 'Hello webpack'
    element.classList.toggle("hello")
    return element;
  }
  
  document.body.appendChild(component());