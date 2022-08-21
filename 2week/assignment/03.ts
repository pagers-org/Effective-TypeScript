// 3. 다음을 오류가 없도록 해주세요.
type Coffee = {
  name: string;
  price?: number;
  size?: string;
};
const mycoffee: Coffee = {
  name: 'mocha',
};

mycoffee.price = 6000;
mycoffee.size = 'Large';

// 질문
// type Coffee = {
//   name: string;
//   price?: number;
//   size?: 'Large'|'Medium'|'Small';
// };
// 로 하는것과 size?: string 하는것 뭐가 더 좋을까요? 저는 보통 리터럴타입을 명시해서 쓰긴 하는데 타입관리하는데 있어서 까다롭더라구요...
//
export default {};
