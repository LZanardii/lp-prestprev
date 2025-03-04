import { Breadcrumb, Button, Card, Spinner } from "react-bootstrap";
import "./style.css"
import { navigate } from "src/utils/navigate";
import { ROUTES } from "src/constants";

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
        <Button variant="primary" onClick={() => navigate(ROUTES.HOME)}>Voltar para pagina principal</Button>
      </Card>
    
    </div>
  )
}
export default EmContrucao;