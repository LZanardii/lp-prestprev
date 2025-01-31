import { Button, Dropdown } from "react-bootstrap";
import { SiWhatsapp } from "react-icons/si";
import { HiMenu } from "react-icons/hi";
import "./style.css"

const Header = () => {
  return (
    <div className="header">
      <div className="desktop">
        <img src="src/assets/prestPrevLogoComFundo.png" alt="logo prestprev"/>
        <h6>Serviços</h6>
        <h6>Sobre</h6>
        <h6>Depoimentos</h6>
        <h6>Contato</h6>
        <Button 
          variant="success"  
          size="sm"
          href="https://wa.me/send/?phone=555185816550&text=Olá+Matheus!%20Pode+me+ajudar?"
          target="_blank"
        >
          <SiWhatsapp size='16'/>
          &nbsp;&nbsp;Entrar em contato!&nbsp;
        </Button>
      </div>

      <div className="mobile">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            <HiMenu size='30'/>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Serviços</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Sobre</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Depoimentos</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Contato</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <img src="src/assets/prestPrevLogoComFundo.png" alt="logo prestprev"/>

        <Button 
          variant="success"  
          size="sm"
          href="https://wa.me/send/?phone=555185816550&text=Olá+Matheus!%20Pode+me+ajudar?"
          target="_blank"
        >
          <SiWhatsapp size={25}/>
        </Button>
      </div>
    </div>
  )
}

export default Header;