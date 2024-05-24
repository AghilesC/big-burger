import { useState } from "react"

export default function LoginPage() {

const [inputValue, setInputValue] = useState("")

const handleSubmit = (event) => { 
event.preventDefault()
    alert(`Je m'appelle ${inputValue}`)
    setInputValue("")
 }

const handleChange = (event) => { 
    setInputValue(event.target.value)
 }

return ( 
<div>
  <h1>Bienvenue chez nous !</h1><br />
  <h2>Connectez-vous</h2>
  <form action="submit" onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} placeholder="Entrez votre prénom" required />
      <button type="submit">Accédez à votre espace</button>
  </form>
</div>
)
}
