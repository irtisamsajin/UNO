import { useEffect, useState } from "react";

import { io } from "socket.io-client";
const socket=io(import.meta.env.VITE_SOCKET_URL, { transports : ['websocket'] });


function App() {

  /* async function handleSubmit(){
    const URL = import.meta.env.VITE_SERVER_URL+"/newUser";
    console.log(URL);
    try{
      await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: 'ajin',
          admin: false,
          roomCode: 'swXlQ'
        })
      })
    }catch(err){
      console.log(err.message);
    }
  } */

  const [count,setCount] = useState(0);
  async function handleSubmit(){
    socket.emit('count',count);
  }

  useEffect(() => {
    function addCount(newCount){
      setCount(newCount);
    }
    socket.on('count+',addCount);
    return () => {
      socket.off('count+');
    }
  })

  return (
    <>
      <button onClick={handleSubmit}>Click here</button>
      {count}
    </>
  )
}

export default App
