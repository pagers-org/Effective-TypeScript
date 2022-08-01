interface Vector2D {
  x: number;
  y: number;
}

function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

interface NamedVector {
  name: string;
  x: number;
  y: number;
}

const v: NamedVector = { x: 3, y: 4, name: 'Zee' };
calculateLength(v); // OK, result is 5

interface Vector3D {
  x: number;
  y: number;
  z: number;
}

function normalize(v: Vector3D) {
  const length = calculateLength(v);
  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  };
}

function calculateLengthL1(v: Vector3D) {
  let length = 0;
  for (const axis of Object.keys(v)) {
    const coord = v[axis];
    // ~~~~~~~ Element implicitly has an 'any' type because ...
    //         'string' can't be used to index type 'Vector3D'
    length += Math.abs(coord);
  }
  return length;
}

const vec3D = { x: 3, y: 4, z: 1, address: '123 Broadway' };
calculateLengthL1(vec3D); // OK, returns NaN

function calculateLengthL1_2(v: Vector3D) {
  return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
}

// ====================================

class C {
  foo: string;
  constructor(foo: string) {
    this.foo = foo;
  }
  method() {}
}

const c = new C('instance of C');
const d: C = { foo: 'object literal' }; // error. 'method' 속성이 '{ foo: string; }' 형식에 없지만 'C' 형식에서 필수입니다.
const e: C = { foo: '', method() {} }; // foo, method 속성이 모두 있으면 okay.

class E {
  method() {}
}
class D extends E {
  foo: string;
  constructor(foo: string) {
    super();
    this.foo = foo;
  }
}
const f: C = new D(''); // prototype chain 상에 method가 존재하면 okay.

const g = Object.create({ method() {} }, { foo: { value: '' } }); // g: any
const h: C = g; // C type 강제(assert)하여 okay.

const i: { foo: string; method: () => void } = Object.create({ method() {} }, { foo: { value: '' } });
const j: C = i; // { foo, method } 타입을 강제하여 okay.

// ====================================

interface PostgresDB {
  runQuery: (sql: string) => any[];
}
interface Author {
  first: string;
  last: string;
}

function getAuthors(database: PostgresDB): Author[] {
  const authorRows = database.runQuery(`SELECT FIRST, LAST FROM AUTHORS`);
  return authorRows.map(row => ({ first: row[0], last: row[1] }));
}

interface DB {
  runQuery: (sql: string) => any[];
}
function getAuthors2(database: DB): Author[] {
  const authorRows = database.runQuery(`SELECT FIRST, LAST FROM AUTHORS`);
  return authorRows.map(row => ({ first: row[0], last: row[1] }));
}

test('getAuthors', () => {
  const authors = getAuthors({
    runQuery(sql: string) {
      return [
        ['Toni', 'Morrison'],
        ['Maya', 'Angelou'],
      ];
    },
  });
  expect(authors).toEqual([
    { first: 'Toni', last: 'Morrison' },
    { first: 'Maya', last: 'Angelou' },
  ]);
});
