var database = require('./connection')

module.exports = {
  getPlanes,
  getLessons,
  getLessonContent
  // editBook,
  // deleteBook,
  // getAuthorsBookID,
  // getAuthors,
  // getAuthor,
  // getBooksAuthorID,
  // deleteAuthor
}

function getPlanes() {
  return database('planes').select('*')
}

function getLessons(lessonOn) {
  return database('lessons').select('*').where('lessonOn', lessonOn)
}

function getLessonContent(lesson_id) {
  return database('lessonContents').select('*').where('lesson_id', lesson_id)
}
//
// function editBook(book, book_id) {
//   return database('book').where('id', book_id)
//     .update(book)
// }
//
// function deleteBook(book_id) {
//   return database('book').where('id', book_id).del()
// }
//
// function getAuthorsBookID(book_id) {
//   return database('book_author').select('*')
//     .where('book_id', book_id)
//     .join('author', 'book_author.author_id', '=', 'author.id')
// }
//
// function getAuthor(author_id) {
//   return database('author').select('*').where('id', author_id)
// }
//
// function getAuthors() {
//   return database('author').select('*')
// }
//
// function getBooksAuthorID(author_id) {
//   return database('book_author').select('*')
//     .where('author_id', author_id)
//     .join('book', 'book_author.book_id', '=', 'book.id')
// }
//
// function deleteAuthor(author_id) {
//   return database('author').where('id', author_id).del()
// }
