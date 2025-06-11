import "./sobreMi.css"
import { sobreMi } from "../../../data/sobreMi"
import { SobreMiCard } from "../../../components/Portfolio/SobreMiCard/SobreMiCard"


export const SobreMi = () => {
  return (
    <section className='sobreMi-section'>
        {sobreMi.map((elem)=>{
            return(
                <SobreMiCard key={elem.titulo} elem={elem} />
            )
        })}
    </section>
  )
}
