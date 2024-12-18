import React from 'react'

function App() {
  
  let user = "Abhishek"

  // let ser = ()=>{
  //   console.log(user)

  //   user = "ayush"
  //   console.log(user)
    
  // }

  // function abc(){
  //   console.log("Hello");
  // }
  // abc()


  const abc = () => {
    console.log("Hello World");
    
  }

  return (
    <div>
    <button onClick={abc}>click</button>
    </div>

  )
}

export default App