import Button from "./evento/Button";

function Evento(){

  function meuEvento(){
    console.log("Ativou primeiro evento!!")
  }

  function segundoEvento(){
    console.log('Ativou o segundo evento')
  }

  return(
    <>
    <p> Clique para disparar um evento:</p>
    <Button event={meuEvento} text="Primeiro Evento"/>
    <Button event={segundoEvento} text="Segundo Evento"/>
    </>
  )
}

export default Evento;