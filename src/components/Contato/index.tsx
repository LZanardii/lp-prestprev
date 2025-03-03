import { Card, Nav } from "react-bootstrap";
import "./style.css"
import { useState } from "react";
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
      <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1729.3862692135663!2d-51.139460043413074!3d-29.899654079466366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDUzJzU4LjgiUyA1McKwMDgnMTguMiJX!5e0!3m2!1spt-BR!2sbr!4v1741031154844!5m2!1spt-BR!2sbr" ></iframe>
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