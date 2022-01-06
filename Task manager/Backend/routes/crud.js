const express = require("express")
const router = express.Router()


const {getAllData,createData,getOneItem,updateAllData,deleteData}= require('../controllers/crud')

router.route('/').get(getAllData).post(createData)
router.route('/:id').get(getOneItem).patch(updateAllData).delete(deleteData)

module.exports = router