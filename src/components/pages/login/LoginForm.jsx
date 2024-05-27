import React, { useState } from 'react'

const [inputValue, setInputValue] = useState("")

const handleSubmit = (event) => { 
event.preventDefault()
    alert(`Je m'appelle ${inputValue}`)
    setInputValue("")
 }

const handleChange = (event) => { 
    setInputValue(event.target.value)
 }

export default function LoginForm() {
  return (
    <form action="submit" onSubmit={handleSubmit}>
    <h1>Bienvenue chez nous !</h1>
    <br />
    <h2>Connectez-vous</h2>
    <input type="text" value={inputValue} onChange={handleChange} placeholder="Entrez votre prénom" required />
    <button type="submit">Accédez à votre espace</button>
</form>
  )
}
