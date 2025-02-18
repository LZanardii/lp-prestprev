import { Card, Nav } from "react-bootstrap";
import "./style.css"
import { useState } from "react";
import Mapa from "../Mapa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";

const Contato = () => {

  const contatoContent = () => (
    <>
      <Card.Body className="localizacaoCard">
        <Card.Title><SiGooglemaps style={{marginRight:8}}/>Canoas, RS</Card.Title>
        <Card.Subtitle>Av. 17 de Abril, Setor 2, Quadra CC nº 13, apartamento 04 - Guajuviras</Card.Subtitle>
      </Card.Body>
    </>
  )


  const mapaContent = () => (
    <>
      <Mapa />
    </>
  )

  const [enderecoContent, setEnderecoContent] = useState(contatoContent)

  

  return (
    <div className="contato">
      <div className="content">
        <h1>Entre em Contato</h1>
        <div className="cards">
          <Card>
            <Card.Body>
              <Card.Title><FaPhoneAlt size={18}/> Telefone</Card.Title>
              <Card.Text>
                (51) 98581-6550
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title><MdMarkEmailUnread size={23} style={{marginRight:8}}/>Email</Card.Title>
              <Card.Text>
                prestprevcanoas@gmail.com
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <Card>
          <Card.Header>
            <Nav variant="pills" defaultActiveKey="#localizacao">
              <Nav.Item>
                <Nav.Link href="#localizacao" onClick={() => setEnderecoContent(contatoContent)}>Localização</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#mapa" onClick={() => setEnderecoContent(mapaContent)}>Mapa</Nav.Link>
              </Nav.Item>
              
            </Nav>
          </Card.Header>
          {enderecoContent}
        </Card>
      </div>
    </div>
  )
}

export default Contato;