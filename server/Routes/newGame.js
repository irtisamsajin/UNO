const express=require('express');
const {createRoom} = require('../Helpers/room');

const router=express.Router();

router.post("/",(req,res) => {
    createRoom(req.body.adminUser);
})

module.exports=router;