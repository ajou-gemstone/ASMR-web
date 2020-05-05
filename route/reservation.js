var express = require('express');
var router = express.Router();
var dbQuery = require("../database/promiseQuery.js");

router.get('/list', async function(req, res) {
  let sql = 'select rd.date, l.buildingName, l.lectureRoomNum, rd.time, r.leaderId from reservation r, reservationdescription rd, lectureroom l where r.lectureRoomId=l.id and r.id=rd.reservationId'
  let recodes = await dbQuery(sql);

  recodes = recodes.rows;
  res.json(recodes);
});
<<<<<<< Updated upstream

router.post('/reservationSearch',function(req, res) {
  console.log(req.body.buildingName);
  console.log(req.body.date);
});


=======
>>>>>>> Stashed changes

module.exports = router;
