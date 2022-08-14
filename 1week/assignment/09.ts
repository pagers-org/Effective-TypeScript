/**
 * 아래의 함수가 정상적으로 동작하기 위해 어떤 타입을 활용하면 될까요?
 */

function prettyPrint<T>(x?: T): string {
	console.log(typeof x);
	if (typeof x === "string") return `"${x}"`;

	if (typeof x === "number") return String(x);

	if (Array.isArray(x)) return "[" + x.map(prettyPrint).join(", ") + "]"; // mop 오타인듯?

	if (typeof x === "object") return Object.keys(x).join(", ");

	return "etc.";
}

console.log(prettyPrint("dd"));
console.log(prettyPrint([1, 2, 3]));
console.log(
	prettyPrint({
		name: "Bob",
		age: 33,
	})
);
console.log(prettyPrint(undefined))
console.log(prettyPrint())
