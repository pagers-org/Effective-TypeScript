/**
 * 아래의 클래스를 유연하게 만들어주세요.
 * - any 타입을 제거해주세요.
 * - items의 원소를 제거하는 remove 메서드를 만들어주세요.
 * - 특정 index의 원소를 변경하는 update 메서드를 만들어주세요.
 */

class List<ItemType> {
  private items: ItemType[] = [];

  add(item: ItemType) {
    this.items.push(item);
  }

  get(index: number) {
    return this.items[index];
  }

  update(index: number, newItem: ItemType) {
    const isInaccessible = index < 0 || this.items.length - 1 < index;
    if (isInaccessible) {
      throw Error('inaccessible index error');
    }
    this.items[index] = newItem;
  }

  remove(targetItem: ItemType) {
    const isEqual = (target1: ItemType, target2: ItemType) => {
      // object는 참조형이므로 stringfy 한 후 비교
      if (typeof target1 === 'object') {
        return JSON.stringify(target1) === JSON.stringify(target2);
      }
      return target1 === target2;
    };

    const nextItems = this.items.filter(currentItem => !isEqual(targetItem, currentItem));

    this.items = nextItems;
  }
}
