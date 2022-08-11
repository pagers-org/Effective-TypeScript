/**
 * 아래의 클래스를 유연하게 만들어주세요.
 * - any 타입을 제거해주세요.
 * - items의 원소를 제거하는 remove 메서드를 만들어주세요.
 * - 특정 index의 원소를 변경하는 update 메서드를 만들어주세요.
 */

class List<T> {
  private items: Array<T> = [];

  add(item: T) {
    this.items.push(item);
  }

  get(index: number) {
    return this.items[index];
  }
  remove(index: number) {
    return this.items = [...this.items].filter((_, filterIndex: number) => index !== filterIndex)
  }
  update(index: number, item: T) {
    return this.items[index] = item;
  }
}
const list = new List();
console.log(list.add(0))
console.log(list.add(4))
console.log(list.add('333'))
console.log(list.get(2))
console.log(list.remove(0))
console.log(list.update(0, 'test'))
