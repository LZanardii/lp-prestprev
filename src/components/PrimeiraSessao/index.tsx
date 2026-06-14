import { Button, Form } from "react-bootstrap";
import Cabecalho from "../Cabecalho";
import "./style.css";
import { useState } from "react";
import imgBackground from "../../assets/first-section-background.png";

interface PrimeiraSessaoProps {
  showTitleContent: boolean;
}

const PrimeiraSessao = ({ showTitleContent }: PrimeiraSessaoProps) => {
  const [inputPergunta, setInputPergunta] = useState("");

  const direcionaPerguntaParaWhatsapp = () => {
    const encodedPergunta = encodeURIComponent(inputPergunta);
    const url = `https://wa.me/5551985816550?text=${encodedPergunta}`;

    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="primeiraSessao">
      <div className="content">
        <Cabecalho />

        {showTitleContent && (
          <div className="titleContent">
            <div className="title">
              <h1>
                A garantia dos seus benefícios é um direito seu como cidadão!
              </h1>

              <h5>
                A PrestPrev Serviços Previdenciários é um escritório
                especializado em requerimentos previdenciários que preza
                facilitar a sua busca pelos seus direitos como cidadão
              </h5>

              <Form>
                <Form.Control
                  type="text"
                  placeholder="Como podemos te ajudar?"
                  size="sm"
                  onChange={(e) => setInputPergunta(e.target.value)}
                />

                <Button
                  variant="primary"
                  size="sm"
                  type="submit"
                  onClick={() => direcionaPerguntaParaWhatsapp()}
                >
                  Enviar
                </Button>
              </Form>
            </div>
          </div>
        )}
      </div>
      {showTitleContent && (
        <img
          className="backgroundImage"
          src={imgBackground}
          alt="carteiras de trabalho na mesa"
        />
      )}
    </div>
  );
};

export default PrimeiraSessao;