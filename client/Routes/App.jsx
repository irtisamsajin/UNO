
function App() {

  async function handleSubmit(){
    const URL = import.meta.env.VITE_SERVER_URL+"/newGame";
    console.log(URL);
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        adminUser: "New Admin"
      })
    })
  }

  return (
    <>
      <button onClick={handleSubmit}>Click here</button>
    </>
  )
}

export default App
