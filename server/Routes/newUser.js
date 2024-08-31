const express=require('express');
const fs=require('fs');
const { getRooms, roomExists, saveRooms } = require('../Helpers/room');
const { getToken } = require('../Helpers/token');

const router=express.Router();

router.post("/",(req,res) => {
    const {roomCode,admin,username}=req.body;
    console.log(req.body);
    let rooms=getRooms();
    let roomidx=roomExists(rooms,roomCode);
    if(roomidx==null){
        res.status(404).json({
            message: "Room invalid"
        })
        return;
    };
    if(rooms[roomidx].players.includes(username)){
        res.status(409).json({
            message: "Username taken"
        })
        return;
    }
    rooms[roomidx].players.push(username);
    if(admin==true)rooms[roomidx].admin=username;
    saveRooms(rooms);
    const token=getToken({
        roomCode: roomCode,
        admin: admin, //boolean
        username: username
    })
    res.status(200).json({
        message: "User added",
        token: token,
        roomCode: roomCode,
    })

})

module.exports=router;



// check if room and username are good to go. 