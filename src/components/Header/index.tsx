import { Button } from "react-bootstrap";
import { SiWhatsapp } from "react-icons/si";
import "./style.css"

const Header = () => {
  return (
    <div className="header">
      <div className="headerBox">
        <img src="src/assets/prestPrevLogoComFundo.png" width='5px' height='70px' alt="logo prestprev"/>
        <span>Serviços</span>
        <span>Sobre</span>
        <span>Depoimentos</span>
        <span>Contato</span>
        <Button 
          variant="success"  
          size="sm"
          href="https://wa.me/send/?phone=555185816550&text=Olá+Matheus!%20Pode+me+ajudar?"
          target="_blank"
        >
          <SiWhatsapp/>&nbsp;&nbsp;Entrar em contato!&nbsp;
        </Button>
      </div>
    </div>
  )
}

export default Header;