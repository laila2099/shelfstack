type BookId = string;

// Interfaces
interface Book {
  readonly id: BookId; // Readonly field
title: string;
isbn: string;
author: string;
}

interface Loan {
id: string;
bookId: BookId;
memberId: string;
}

// Typed Functions

/**
 * Adds a book using an immutable pattern (returns a new array)
 */
function addBook(list: Book[], book: Book): Book[] {
return [...list, book];
}

/**
 * Finds a book by ISBN. Returns Book or undefined.
 */
function findByIsbn(list: Book[], isbn: string): Book | undefined {
return list.find(book => book.isbn === isbn);
}

// --- Demo Comments / usage ---
let myLibrary: Book[] = [];

const newBook: Book = {
id: "TS-1",
title: "Programming TypeScript",
isbn: "978-1492037644",
author: "Boris Cherny"
};

myLibrary = addBook(myLibrary, newBook);

const found = findByIsbn(myLibrary, "978-1492037644");
console.log("Found Book:", found?.title);