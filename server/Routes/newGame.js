const express=require('express');
const {createRoom} = require('../Helpers/room');

function newGame(req,res,next){
    req.body.roomCode=createRoom();
    next();
}

module.exports=newGame;