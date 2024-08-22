
function App() {

  async function handleSubmit(){
    const URL = import.meta.env.VITE_SERVER_URL;
    console.log(URL)
    const data={
      name: "Unknown"
    }
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  }

  return (
    <>
      <button onClick={handleSubmit}>Click here</button>
    </>
  )
}

export default App
