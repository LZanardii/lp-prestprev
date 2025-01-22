import { Button } from "react-bootstrap";
import { SiWhatsapp } from "react-icons/si";
import "./style.css"

const Header = () => {
  return (
    <div className="card">
      <div className="header">
        <img src="src/assets/prestPrevLogoComFundo.png" width='5px' height='70px'/>
        <span>Serviços</span>
        <span>Sobre</span>
        <span>Depoimentos</span>
        <span>Contato</span>
        <Button variant="success"  size="sm"><SiWhatsapp/>&nbsp;&nbsp;Entrar em contato!&nbsp;</Button>
      </div>
    </div>
  )
}

export default Header;