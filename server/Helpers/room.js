const fs = require('fs');
const randomstring = require("randomstring");

function createRoom(adminUser){
    let rooms=[];
    if(fs.existsSync('rooms.json')){
        rooms=JSON.parse(fs.readFileSync('rooms.json'));
    }

    let newRoom="";
    var roomExists=true;
    while(roomExists){
        if(newRoom=="" || roomExists)newRoom=randomstring.generate({
            length: 5,
            charset: 'alphanumeric'
        })
        roomExists=false;
        for(var idx=0;idx<rooms.length;idx++){
            if(rooms.code==newRoom){
                roomExists=true;
                break;
            }
        }
    }
    rooms.push({
        code: newRoom,
        players: [adminUser]
    })
    fs.writeFileSync('rooms.json',JSON.stringify(rooms));    
    console.log(rooms);
}

module.exports={createRoom};