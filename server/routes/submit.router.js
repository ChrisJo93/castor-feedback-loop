const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

//get route for admin page

//post route to save feedback from review

router.get('/', (req, res) => {
  let queryText = 'SELECT * FROM "feedback" ORDER BY "id";';
  pool
    .query(queryText)
    .then((result) => {
      // Sends back the results in an object
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('error getting books', error);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  let newFeedBack = req.body;
  console.log(`Adding new feedback`, newFeedBack.comments);

  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "flagged")
                    VALUES ($1, $2, $3, $4, $5)`;
  pool
    .query(queryText, [
      newFeedBack.feeling,
      newFeedBack.understanding,
      newFeedBack.support,
      newFeedBack.comments,
      newFeedBack.flagged,
    ])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error with post route`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
//delete route to delete from admin page
