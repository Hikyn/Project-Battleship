import './style.css';

const shipFactory = (length) => {
  let hitCount = 0;
  const hit = () => {
    hitCount++;
  }
  const isSunk = () => {
    return hitCount >= length ? true : false;
  }
  return { hit, isSunk }
}

export { shipFactory }