import { Button, Modal } from "react-bootstrap";
import imgProfile from "../../assets/matheus_krause.jpg"
import "./style.css"
import { useState } from "react";

const Sobre = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const tituloSessao = (
    <h1>Conheça a PrestPrev</h1>
  )

  const paragrafoSobre = (
    <>
      <p>
        A PrestPrev é um escritório especializado em documentação previdenciária, comprometido em oferecer soluções ágeis e eficazes para garantir os direitos dos nossos clientes junto ao INSS.          
      </p>
      <p>
        Nosso objetivo é descomplicar o acesso aos benefícios previdenciários, proporcionando um atendimento humanizado e personalizado. Sabemos que lidar com a burocracia pode ser um desafio, por isso, trabalhamos com transparência e eficiência para que nossos clientes tenham mais tranquilidade e segurança em cada etapa do processo.
      </p>
      <p>
        Com mais de quatro anos de experiência no mercado, somos referência no setor e já ajudamos inúmeras pessoas a conquistarem seus direitos. Se você precisa de orientação previdenciária, conte conosco para um serviço ágil, confiável e acessível.
      </p>
    </>
  )

  const buttonModal = (
    <Button className="buttonSaberMais" onClick={handleShow}>
      Clique aqui para saber mais!
    </Button>
  )

  return (
    <div className="sobre">
      <div className="card">
        <div className="text">
          {tituloSessao}
          {paragrafoSobre}
          {buttonModal}
        </div>
        <div className="textMobile">
          {tituloSessao}
          {paragrafoSobre}
          {buttonModal}
        </div>
      </div>
      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sobre nós</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="imagem" src={imgProfile}/>
          <p>
            Meu nome é <b>Matheus Krause da Silva</b>, sou empresário e fundador da <b>PrestPrev</b>, escritório especializado em documentação previdenciária.
          </p>
          <p>
            Com mais de quatro anos de experiência no mercado, dedico minha trajetória profissional a ajudar pessoas a garantirem seus direitos perante o INSS.
          </p>
          <p>
            Atualmente, estou no último semestre do curso de Direito, o que me permite unir conhecimento jurídico e prática documental para oferecer um atendimento preciso e eficiente. Meu compromisso é auxiliar clientes em processos de aposentadoria, amparo ao deficiente e ao idoso, auxílio-doença, auxílio-reclusão e auxílio-maternidade, sempre com transparência e dedicação.
          </p>
          <p>
            Se você precisa de orientação para garantir seu benefício previdenciário, conte comigo e com minha equipe para tornar esse processo mais simples e seguro.
          </p>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Sobre;