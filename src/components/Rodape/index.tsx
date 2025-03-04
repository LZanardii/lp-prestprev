import imgLogo from "../../assets/prestprev-logo-fundo-azul.png"
import "./style.css"

const Rodape = () => {
  return (
    <div className="rodape">
      <div className="content">
        <img src={imgLogo} alt="logo prestprev"/>
        <p>Copyright © PrestPrev - Todos os direitos reservados.</p>
      </div>

    </div>
  )
}

export default Rodape;