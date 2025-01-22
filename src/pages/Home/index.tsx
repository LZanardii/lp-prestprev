import FirstSection from "src/components/FirstSection"
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <FirstSection></FirstSection>
      <Button>Bootstrap</Button>
      <Button variant="success"  size="sm">Entrar em contato</Button>
    </>
  )
}

export default Home;