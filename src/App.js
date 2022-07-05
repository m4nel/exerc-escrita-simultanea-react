
import { useState } from "react"
import { Fragment } from "react"

function App() {

  const [nome, Setnome] = useState("--")
  const [sobrenome, setSobrenome] = useState("--")
  const [idade, setIdade] = useState ("--")

  const handlnome = (event) => {
    Setnome(event.target.value)
  }

  const handleSobrenome = (event) => {
    setSobrenome(event.target.value)
  }

  const handlIdade = (event) => {
    setIdade(event.target.value)
  }

  return (

    <>
      <div>

        Nome:
        <input type="text" value={nome} onChange={handlnome} />
      </div>


      <div>
        Sobrenome:
        <input type="text" value={sobrenome} onChange={handleSobrenome}/>
      </div>

      <div>
        Idade:
        <input type="text" value={idade} onChange={handlIdade}/>
      </div>

      <hr />
      <div>
        <p>
          Olá {nome} {sobrenome}, tudo bem?<br />
          Você tem {idade} anos.
        </p>
      </div>
    </>
  )
}


export default App;