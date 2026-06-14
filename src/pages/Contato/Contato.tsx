import Contato from "src/components/Contato";
import PrimeiraSessao from "src/components/PrimeiraSessao";
import Rodape from "src/components/Rodape";

const ContatoPage = () => {
  return (
    <>
      <PrimeiraSessao showTitleContent={false}/>
      <div style={{paddingTop: `110px`}}></div>
        <Contato />
        <Rodape />
      <div/>
    </>
  )
}

export default ContatoPage;