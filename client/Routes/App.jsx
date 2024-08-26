
function App() {

  async function handleSubmit(){
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
  }

  return (
    <>
      <button onClick={handleSubmit}>Click here</button>
    </>
  )
}

export default App
