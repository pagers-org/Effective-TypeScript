/**
 * 아래의 클래스를 유연하게 만들어주세요.
 * - any 타입을 제거해주세요.
 * - items의 원소를 제거하는 remove 메서드를 만들어주세요.
 * - 특정 index의 원소를 변경하는 update 메서드를 만들어주세요.
 */

class List<T> {
  private items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }

  get(index: number) {
    return this.items[index];
  }

  update(index: number, item: T) {
    this.items[index] = item;
    return true;
  }

  removeByIndex(index: number) {
    return this.items.filter((_, i) => i !== index);
  }

  removeByMatcherFn(target: T, matcherFn: (item: T) => unknown) {
    // in these cases, i think using third party(for example, dequal) to diff is the best.
    return this.items.filter((item) => matcherFn(target) !== matcherFn(item));
  }

  removeByAll() {
    this.items.length = 0;
    return true;
  }
}
