var express = require('express');
var router = express.Router();
var queries = require('../data/queries')


router.get('/', (req, res, next)=>{
  queries.getPlanes()
    .then(planes=>{
      res.json(planes)
    })
})

// router.get('/:id', function(req, res, next) {
//   queries.getAuthor(req.params.id)
//     .then(authorNoBooks=>{
//       getAuthorsAndBooks(res, authorNoBooks)
//         .then(author=>{
//           res.render('author', {author})
//         })
//     })
// })
//
// router.get('/:id/editPage', (req, res, next)=>{
//   queries.getAuthor(req.params.id)
//     .then(author=>{
//       res.render('editAuthor', {author})
//     })
// })
//
// router.patch('/:id/editAuthor', (req, res, next)=>{
//   queries.editAuthor(req.body, req.params.id)
//     .then(author=>{
//       res.render('editBook', {book, message: 'Updated'})
//     })
// })
//
// router.delete('/:id/delete', (req, res, next)=>{
//   queries.deleteAuthor(req.params.id)
//     .then(()=>{
//       res.redirect('/authors')
//     })
// })

module.exports = router;
