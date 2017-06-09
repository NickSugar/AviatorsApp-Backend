var express = require('express');
var router = express.Router();
var queries = require('../data/queries')

router.get('/:lessonOn', (req, res, next)=>{
  queries.getLessons(req.params.lessonOn)
    .then(lessons=>{
      res.json(lessons)
    })
})

/**
 * @api {get} /lessons/:id/lessonContents Request Lessons Contents
 * @apiName GetLessonContents
 * @apiGroup Lessons
 *
 * @apiParam {Number} id Lessons unique ID.
 *
 * @apiSuccess {Number} id Contents unique ID.
 * @apiSuccess {Number} lesson_id  Foreign key of lesson
 * @apiSuccess {Number} order Decimal number of the order in the lesson.
 * @apiSuccess {String} type Content type (i.e. header, list...)
 * @apiSuccess {String} content A string of content
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       id: 3,
 *       lesson_id: 2,
 *       order: 1.3,
 *       type: "dataList",
 *       content: "(Important Gobosh Characteristics) Dimensions> - Span : 27.4 ft; - Lenght : 20.5 ft;"
 *     }
 */
router.get('/:id/lessonContents', (req, res, next)=>{
  queries.getLessonContent(req.params.id)
    .then(contents=>{
      res.json(contents)
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
