import { Button, Form } from "react-bootstrap";
import Header from "../Header"
import "./style.css"
import { useState } from "react";
import imgBackground from "../../assets/first-section-background.png"

const FirstSection = () => {

  const [inputPergunta, setInputPergunta] = useState<string>("");

  const direcionaPerguntaParaWhatsapp = () => {
    // Codifica a pergunta para ser utilizada na URL
    const encodedPergunta = encodeURIComponent(inputPergunta);
    const url = `https://wa.me/5551985816550?text=${encodedPergunta}`;
    
    // Abre a URL em uma nova aba
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className='fistSection'>
      <div className="content">
        <Header/>
        <div className="titleContent">
          <div className="title">
            <h1>
              A garantia dos seus benefícios é um direito seu como cidadão!
            </h1>
            <h6>
              A PrestPrev é o escritório especializado em processos previdenciários que preza facilitar a sua busca pelos seus direitos como cidadão
            </h6>
            <Form>
              <Form.Control type="text" placeholder="Como podemos te ajudar?" size="sm" onChange={e => setInputPergunta(e.target.value)} />
              <Button variant="primary" size="sm" type="submit" onClick={() => direcionaPerguntaParaWhatsapp()}>
                Enviar
              </Button>
            </Form>
          </div>
        </div>
       
      </div>
      <img className="backgroundImage" src={imgBackground} alt="carteiras de trabalho na mesa"/>
    </div>
  )
}

export default FirstSection;