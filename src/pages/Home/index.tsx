import Contato from "src/components/Contato";
import PrimeiraSessao from "src/components/PrimeiraSessao"
import Rodape from "src/components/Rodape";
import Servicos from "src/components/Servicos";
import Sobre from "src/components/Sobre";

const Home = () => {
  return (
    <>
      <PrimeiraSessao />
      <Servicos />
      <Sobre />
      <Contato />
      <Rodape />
    </>
  )
}

export default Home;