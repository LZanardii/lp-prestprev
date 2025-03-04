import { Button, Dropdown } from "react-bootstrap";
import { SiWhatsapp } from "react-icons/si";
import { HiMenu } from "react-icons/hi";
import imgLogo from "../../assets/prestprev-logo-fundo-azul.png"
import "./style.css"
import { ROUTES } from "src/constants";
import { navigate } from "src/utils/navigate";

const Cabecalho = () => {
  return (
    <div className="header">
      <div className="desktop">
        <img src={imgLogo}  onClick={() => navigate(ROUTES.HOME)} alt="logo prestprev"/>
        <h6 onClick={() => navigate(ROUTES.SERVICO)} >Serviços</h6>
        <h6 onClick={() => navigate(ROUTES.SOBRE)}>Sobre</h6>
        <h6 onClick={() => navigate(ROUTES.DEPOIMENTO)}>Depoimentos</h6>
        <h6 onClick={() => navigate(ROUTES.CONTATO)}>Contato</h6>
        <Button 
          variant="success"  
          size="sm"
          href="https://wa.me/5551985816550?text=Ol%C3%A1%20Matheus!%20Pode%20me%20ajudar%3F"
          target="_blank"
        >
          <SiWhatsapp size='16'/>
          <span> &nbsp;&nbsp;Entrar em contato!&nbsp;</span>
        </Button>
      </div>

      <div className="mobile">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            <HiMenu size='30'/>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href={ROUTES.SERVICO}>Serviços</Dropdown.Item>
            <Dropdown.Item href={ROUTES.SOBRE}>Sobre</Dropdown.Item>
            <Dropdown.Item href={ROUTES.DEPOIMENTO}>Depoimentos</Dropdown.Item>
            <Dropdown.Item href={ROUTES.CONTATO}>Contato</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <img src={imgLogo} onClick={() => navigate(ROUTES.HOME)} alt="logo prestprev"/>

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