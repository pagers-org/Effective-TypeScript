// tsConfig: {"noImplicitAny":false,"strictNullChecks":false}
function add(a, b) {
  return a + b;
}
add(10, null);

// tsConfig: {"noImplicitAny":false}
function add2(a, b) {
  return a + b;
}
add2(10, null);

// tsConfig: {"noImplicitAny":true}
function add3(a, b) {
  // ~    Parameter 'a' implicitly has an 'any' type
  //    ~ Parameter 'b' implicitly has an 'any' type
  return a + b;
}

// tsConfig: {"noImplicitAny":true}
function add4(a: number, b: number) {
  return a + b;
}

// tsConfig: {"noImplicitAny":true,"strictNullChecks":false}
const x1: number = null; // OK, null is a valid number

// tsConfig: {"noImplicitAny":true,"strictNullChecks":true}
const x2: number = null;
//    ~ Type 'null' is not assignable to type 'number'

// tsConfig: {"noImplicitAny":true,"strictNullChecks":true}
const x3: number | null = null;

// tsConfig: {"noImplicitAny":true,"strictNullChecks":true}
const el = document.getElementById('status');
el.textContent = 'Ready';
// ~~ Object is possibly 'null'

if (el) {
  el.textContent = 'Ready'; // OK, null has been excluded
}
el!.textContent = 'Ready'; // OK, we've asserted that el is non-null

export default {};
