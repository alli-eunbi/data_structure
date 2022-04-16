class DirectAddressTable {
  constructor() {
    this.table = [];
  }

  setValue(value = -1) {
    this.table[value] = value;
  }

  getValue(value = -1) {
    return this.table[value];
  }

  getTable() {
    return this.table;
  }
}

const myTable = new DirectAddressTable();
myTable.setValue(3);
myTable.setValue(10);
myTable.setValue(90);

console.log(myTable.getTable());
