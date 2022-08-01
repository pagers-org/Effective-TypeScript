let x = 'hello';
x = 1234;

// ====================================

interface Square {
  width: number;
}
interface Rectangle extends Square {
  height: number;
}
type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    // ~~~~~~~~~ 'Rectangle' only refers to a type,
    //           but is being used as a value here
    return shape.width * shape.height;
    //         ~~~~~~ Property 'height' does not exist
    //                on type 'Shape'
  } else {
    return shape.width * shape.width;
  }
}

function calculateArea2(shape: Shape) {
  if ('height' in shape) {
    shape; // Type is Rectangle
    return shape.width * shape.height;
  } else {
    shape; // Type is Square
    return shape.width * shape.width;
  }
}

interface Square3 {
  kind: 'square';
  width: number;
}
interface Rectangle3 {
  kind: 'rectangle';
  height: number;
  width: number;
}
type Shape3 = Square3 | Rectangle3;

function calculateArea3(shape: Shape3) {
  if (shape.kind === 'rectangle') {
    shape; // Type is Rectangle
    return shape.width * shape.height;
  } else {
    shape; // Type is Square
    return shape.width * shape.width;
  }
}

class Square4 {
  constructor(public width: number) {}
}
class Rectangle4 extends Square4 {
  constructor(public width: number, public height: number) {
    super(width);
  }
}
type Shape4 = Square4 | Rectangle4;

function calculateArea4(shape: Shape4) {
  if (shape instanceof Rectangle4) {
    shape; // Type is Rectangle
    return shape.width * shape.height;
  } else {
    shape; // Type is Square
    return shape.width * shape.width; // OK
  }
}

// ====================================

function asNumber(val: number | string): number {
  return val as number;
}

function asNumber2(val: number | string): number {
  return typeof val === 'string' ? Number(val) : val;
}

// ====================================

function turnLightOn() {}
function turnLightOff() {}
function setLightSwitch(value: boolean) {
  switch (value) {
    case true:
      turnLightOn();
      break;
    case false:
      turnLightOff();
      break;
    default:
      console.log(`I'm afraid I can't do that.`);
  }
}
interface LightApiResponse {
  lightSwitchValue: boolean;
}
async function setLight() {
  const response = await fetch('/light');
  const result: LightApiResponse = await response.json();
  setLightSwitch(result.lightSwitchValue);
}

function add(a: number, b: number) {
  return a + b;
}
// ~~~ Duplicate function implementation
function add(a: string, b: string) {
  return a + b;
}
// ~~~ Duplicate function implementation

// ====================================

// tsConfig: {"noImplicitAny":false}
function add2(a: number, b: number): number;
function add2(a: string, b: string): string;

function add2(a, b) {
  return a + b;
}

const three = add2(1, 2); // Type is number
const twelve = add2('1', '2'); // Type is string

export default {};
