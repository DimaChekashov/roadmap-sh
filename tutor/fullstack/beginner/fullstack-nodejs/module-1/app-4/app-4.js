import lodash from "lodash";

console.log(lodash.difference([1, 2, 3, 4, 5], [5, 2, 10]));

let characters = [
  { 'name': 'barney',  'age': 36, 'blocked': false },
  { 'name': 'fred',    'age': 40, 'blocked': true },
  { 'name': 'pebbles', 'age': 1,  'blocked': false }
];

const idx = lodash.findIndex(characters, (chr) => {
	return chr.age < 20;
})

console.log(idx);
