import "./style.css"
import imgOldCouple from "../../assets/old-couple.png"
import { MdElderlyWoman, MdOutlineElderly, MdOutlinePregnantWoman } from "react-icons/md";
import { FaWheelchair } from "react-icons/fa";
import { RiAlertFill } from "react-icons/ri";
import { CiPill } from "react-icons/ci";

const Servicos = () => {
  return (
    <div className="servicos">
      <div className="content">
        <div className="text">
          <h1>BUSCA POR UM DESTES SERVIÇOS?</h1>
          <div className="textWithImage">
            <MdOutlineElderly size={28} />
            <h5>
              Aposentadoria
            </h5>
          </div>
          <div className="textWithImage">
            <FaWheelchair size={20} style={{margin: "5px"}}/>
            <h5>
              Amparo ao Deficiente
            </h5>
          </div>
          <div className="textWithImage">
            <MdElderlyWoman size={28} />
            <h5>
              Amparo ao Idoso
            </h5>
          </div>
          <div className="textWithImage">
            <CiPill size={28} />
            <h5>
              Auxílio Doença
            </h5>
          </div>
          <div className="textWithImage" >
            <RiAlertFill size={25} />
            <h5>
              Auxílio Reclusão
            </h5>
          </div>
          <div className="textWithImage">
            <MdOutlinePregnantWoman size={30}/>
            <h5>
              Auxílio Maternidade
            </h5>
          </div>
        </div>
        <img src={imgOldCouple} alt="idosos na praia"></img>
      </div>
    </div>
  )
}

export default Servicos;