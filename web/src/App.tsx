import { useState } from 'react'
import logo from './logo.svg'
interface ButtonProps {
  text: string
}

// component 

function Button (props: ButtonProps){ 
  return <button>{props.text ?? 'Default'}</button>
}

function App() {

  return (
    <>
      {/* Propriedade, componente, imutabilidade */}
      <Button text='Enviar'/>
    </>
  )
}

export default App
