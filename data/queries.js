var database = require('./connection')

module.exports = {
  getBooks,
  getBook,
  editBook,
  deleteBook,
  getAuthorsBookID,
  getAuthors,
  getAuthor,
  getBooksAuthorID,
  deleteAuthor
}

function getBooks() {
  return database('book').select('*')
}

function getBook(book_id) {
  return database('book').select('*').where('id', book_id)
}

function editBook(book, book_id) {
  return database('book').where('id', book_id)
    .update(book)
}

function deleteBook(book_id) {
  return database('book').where('id', book_id).del()
}

function getAuthorsBookID(book_id) {
  return database('book_author').select('*')
    .where('book_id', book_id)
    .join('author', 'book_author.author_id', '=', 'author.id')
}

function getAuthor(author_id) {
  return database('author').select('*').where('id', author_id)
}

function getAuthors() {
  return database('author').select('*')
}

function getBooksAuthorID(author_id) {
  return database('book_author').select('*')
    .where('author_id', author_id)
    .join('book', 'book_author.book_id', '=', 'book.id')
}

function deleteAuthor(author_id) {
  return database('author').where('id', author_id).del()
}
