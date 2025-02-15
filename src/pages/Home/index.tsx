import Contato from "src/components/Contato";
import PrimeiraSessao from "src/components/PrimeiraSessao"
import Servicos from "src/components/Servicos";
import Sobre from "src/components/Sobre";

const Home = () => {
  return (
    <>
      <PrimeiraSessao></PrimeiraSessao>
      <Servicos></Servicos>
      <Sobre></Sobre>
      <Contato></Contato>
    </>
  )
}

export default Home;