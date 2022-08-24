// 7. 다음에서 falsy 값만 분리해보세요.
var arr = [0, 1, '', undefined, false, 2, undefined, null, -1, 3, NaN];
// const filterOnlyFalsy = (array: typeof arr): => 
var falsyArr = arr.filter(function (value) { return !value; });
console.log(falsyArr);
