import Contato from "src/components/Contato";
import PrimeiraSessao from "src/components/PrimeiraSessao"
import Rodape from "src/components/Rodape";
import Servico from "src/components/Servico";
import Sobre from "src/components/Sobre";

const HomePage = () => {
  return (
    <>
      <PrimeiraSessao showTitleContent={true}/>
      <Servico />
      <Sobre />
      <Contato />
      <Rodape />
    </>
  )
}

export default HomePage;