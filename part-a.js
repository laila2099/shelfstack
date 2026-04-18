class LibraryItem {
constructor(id, title) {
    this.id = id;
    this.title = title;
    this.isAvailable = true;
    }

describe() {
    return `${this.title} (ID: ${this.id}) - Status: ${this.isAvailable ? 'Available' : 'Borrowed'}`;
    }

borrow() {
    this.isAvailable = false;
    }

    returnItem() {
    this.isAvailable = true;
    }
}

class Book extends LibraryItem {
constructor(id, title, isbn, author) {
    super(id, title);
    this.isbn = isbn;
    this.author = author;
    }

  // Method Overriding
describe() {
    const status = super.describe();
    return `${status} | Author: ${this.author} | ISBN: ${this.isbn}`;
}
}

class Member {
  // Private field
#balance = 0;

constructor(name) {
    this.name = name;
    }

deposit(amount) {
    if (amount > 0) this.#balance += amount;
    }

getBalance() {
    return this.#balance;
    }
}

class LibraryCatalog {
    constructor() {
    this.items = [];
    }

static makeId(prefix, num) {
    return `${prefix}-${num}`;
    }

addItem(item) {
    this.items.push(item);
    }

  // Object Destructuring in parameter signature
registerLoan({ memberId, itemId }) {
    const item = this.items.find(i => i.id === itemId);
    if (item && item.isAvailable) {
        item.borrow();
        console.log(`Loan recorded: Member ${memberId} took Item ${itemId}`);
    }
    }

snapshotStats() {
    const total = this.items.length;
    const available = this.items.filter(i => i.isAvailable).length;
    return { total, available };
    }
}

// --- DEMO ---

// 1. Array Destructuring Proof
const [bookId1, bookId2] = ["B-101", "B-102"];

const catalog = new LibraryCatalog();

// 2. Add Books
catalog.addItem(new Book(bookId1, "Clean Code", "978-0132350884", "Robert C. Martin"));
catalog.addItem(new Book(bookId2, "Refactoring", "978-0201485677", "Martin Fowler"));

// 3. Register Loan
catalog.registerLoan({ memberId: "M-99", itemId: bookId1 });

// 4. Object Destructuring Proof (from snapshotStats)
const { total, available } = catalog.snapshotStats();

console.log(`--- Library Stats ---`);
console.log(`Total Books: ${total}`);
console.log(`Available: ${available}`);
console.log(`Demo Description: ${catalog.items[0].describe()}`);