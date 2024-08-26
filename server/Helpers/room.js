const fs = require('fs');
const randomstring = require("randomstring");

function createRoom(){
    let rooms=getRooms();
    let newRoomCode="";
    while(newRoomCode=="" || !roomExists(rooms,newRoomCode)==null){
        newRoomCode=randomstring.generate({
            length: 5,
            charset: 'alphanumeric'
        })
    }
    rooms.push({
        code: newRoomCode,
        date: Date.now(),
        players: []
    })
    saveRooms(rooms);
    return newRoomCode;
}

function getRooms(){
    let rooms=[];
    if(fs.existsSync('rooms.json')){
        rooms=JSON.parse(fs.readFileSync('rooms.json'));
    }
    return rooms;
}

function saveRooms(rooms){
    fs.writeFileSync('rooms.json',JSON.stringify(rooms));  
}

function roomExists(rooms,roomCode){
    for(let idx=0;idx<rooms.length;idx++){
        if(rooms[idx].code==roomCode){
            return idx;
        }        
    }
    return null;
}

module.exports={createRoom,getRooms,saveRooms,roomExists};