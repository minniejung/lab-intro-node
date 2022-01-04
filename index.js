class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.length = this.items.push(item);
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos < 0 || pos >= this.length){
      throw new OutOfBounds();
    }
    return this.items[pos];
  }

  max() {
    if(!this.length) {
      throw new EmptySortedList();
    }
    return this.items[this.length -1];
  }

  min() {
    if(!this.length) {
      throw new EmptySortedList();
    }
    return this.items[0];
  }

  sum() {
    return this.items.reduce((acc, cur) => acc + cur, 0);
  }

  avg() {
    if(!this.length){
      throw new EmptySortedList();
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
