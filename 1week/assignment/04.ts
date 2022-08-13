/**
 * 아래의 클래스를 유연하게 만들어주세요.
 * - any 타입을 제거해주세요.
 * - items의 원소를 제거하는 remove 메서드를 만들어주세요.
 * - 특정 index의 원소를 변경하는 update 메서드를 만들어주세요.
 */

class List<T> {
  private items: T[] = [];

  add(item: T) {
    this.items = [...this.items, item];
  }

  get(index: number) {
    return this.items[index];
  }

  remove(index: number) {
    this.items = this.items.filter((item, targetIndex) => targetIndex !== index);
  }

  update(index: number, newItem: T) {
    this.items = this.items.map((item, targetIndex) => (targetIndex === index ? newItem : item));
  }
}
