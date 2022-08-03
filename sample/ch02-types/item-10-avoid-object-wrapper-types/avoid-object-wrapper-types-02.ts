function getStringLen(foo: string) {
  return foo.length;
}

getStringLen('hello'); // OK
getStringLen(new String('hello')); // OK
