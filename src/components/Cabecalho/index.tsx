import { Button, Dropdown } from "react-bootstrap";
import { SiWhatsapp } from "react-icons/si";
import { HiMenu } from "react-icons/hi";
import imgLogo from "../../assets/prestprev-logo-fundo-azul.png"
import "./style.css"

const Cabecalho = () => {
  return (
    <div className="header">
      <div className="desktop">
        <img src={imgLogo} alt="logo prestprev"/>
        <h6>Serviços</h6>
        <h6>Sobre</h6>
        <h6>Depoimentos</h6>
        <h6>Contato</h6>
        <Button 
          variant="success"  
          size="sm"
          href="https://wa.me/5551985816550?text=Ol%C3%A1%20Matheus!%20Pode%20me%20ajudar%3F"
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
        <img src={imgLogo} alt="logo prestprev"/>

        <Button 
          variant="success"  
          size="sm"
          href="https://wa.me/5551985816550?text=Ol%C3%A1%20Matheus!%20Pode%20me%20ajudar%3F"
          target="_blank"
        >
          <SiWhatsapp size={25}/>
        </Button>
      </div>
    </div>
  )
}

export default Cabecalho;