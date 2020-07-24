// export default heroes.sort(function (a, b) {
//   return (b.health - a.health);
// })


import sum from './basic';


export const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

export default function sorter(e) {
  e.sort((a, b) => (b.health - a.health));
  return e;
}

sorter(heroes);

console.log('worked'); //eslint-disable-line

console.log(sum([1, 2])); //eslint-disable-line
