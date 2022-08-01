function greet(who: string) {
  console.log('Hello', who);
}

greet('jn');

// ====================================

const city = 'new york city';
console.log(city.toUppercase());

// ====================================

// HIDE
const states = [
  { name: 'Alabama', capital: 'Montgomery' },
  { name: 'Alaska', capital: 'Juneau' },
  { name: 'Arizona', capital: 'Phoenix' },
  // ...
];
// END

for (const state of states) {
  console.log(state.capitol);
  // ~~~~~~~ Property 'capitol' does not exist on type
  //         '{ name: string; capital: string; }'.
  //         Did you mean 'capital'?
}

interface State {
  name: string;
  capital: string;
}
const states2: State[] = [
  { name: 'Alabama', capitol: 'Montgomery' },
  // ~~~~~~~~~~~~~~~~~~~~~
  { name: 'Alaska', capitol: 'Juneau' },
  // ~~~~~~~~~~~~~~~~~
  { name: 'Arizona', capitol: 'Phoenix' },
  // ~~~~~~~~~~~~~~~~~~ Object literal may only specify known
  //         properties, but 'capitol' does not exist in type
  //         'State'.  Did you mean to write 'capital'?
  // ...
];
for (const state of states2) {
  console.log(state.capital);
}

// ====================================

const x = 2 + '3'; // OK, type is string
const y = '2' + 3; // OK, type is string

const a = null + 7; // Evaluates to 7 in JS
// ~~~~ Operator '+' cannot be applied to types ...
const b = [] + 12; // Evaluates to '12' in JS
// ~~~~~~~ Operator '+' cannot be applied to types ...
alert('Hello', 'TypeScript'); // alerts "Hello"
// ~~~~~~~~~~~~ Expected 0-1 arguments, but got 2

// ====================================

const names = ['Alice', 'Bob'];
console.log(names[2].toUpperCase());

export default {};
