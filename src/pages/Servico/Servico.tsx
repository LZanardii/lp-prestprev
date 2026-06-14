import PrimeiraSessao from "src/components/PrimeiraSessao";
import Rodape from "src/components/Rodape";
import Servico from "src/components/Servico";

const ServicoPage = () => {
  return (
    <>
      <PrimeiraSessao showTitleContent={false}/>
      <div style={{paddingTop: `80px`}}>
        <Servico />
        <Rodape />
      </div>
    </>
  )
}

export default ServicoPage;