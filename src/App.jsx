import { useState } from "react"

function App() {

const [prenom, setPrenom] = useState()



const handleClick = () => {
setPrenom = alert("Bonjour", {prenom})

}

return ( 
<div>
  <h1>Bienvenue chez nous !</h1><br />
  <h2>Connectez-vous</h2>
  <input type="text" placeholder="Entrez votre prénom" required />
  <button type="submit" onClick={handleClick}>Accédez à votre espace</button>



</div>
)
}

export default App
