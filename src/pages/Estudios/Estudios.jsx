import { estudios } from "../../data/estudios"
import {EstudioCard} from "../../components/EstudioCard/EstudioCard" 
import "./estudios.css"

export const Estudios = () => {
  return (
    <section className="estudios-section">
        {estudios?.map((elem)=>{
          return(
            <EstudioCard elem={elem} />
          )
        })}
    </section>
  )
}
