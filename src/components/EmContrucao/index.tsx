import { Card, Spinner } from "react-bootstrap";
import "./style.css"

const EmContrucao = () => {
  return (
    <div className="emConstrucao">
      <Card className="content">
        <div>
          <h5>Pagina em desenvolvimento...</h5>
        </div>
        <Card.Text>
          <Spinner animation="border" />
        </Card.Text>
        <div style={{marginBottom:`5px`}}/>
      </Card>
    </div>
  )
}
export default EmContrucao;