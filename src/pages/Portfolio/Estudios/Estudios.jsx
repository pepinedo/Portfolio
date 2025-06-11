import { EstudioCard } from "../../../components/Portfolio/EstudioCard/EstudioCard"
import { estudios } from "../../../data/estudios"
import "./estudios.css"

export const Estudios = () => {
  return (
    <section className="estudios-section">
        {estudios?.map((elem)=>{
          return(
            <EstudioCard key={elem.titulo} elem={elem} />
          )
        })}
    </section>
  )
}
