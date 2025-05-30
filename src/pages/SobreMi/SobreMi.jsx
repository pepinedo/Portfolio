import { SobreMiCard } from "../../components/SobreMiCard/SobreMiCard"
import { sobreMi } from "../../data/sobreMi"
import "./sobreMi.css"

export const SobreMi = () => {
  return (
    <section className='sobreMi-section'>
        {sobreMi.map((elem)=>{
            return(
                <SobreMiCard elem={elem} />
            )
        })}
    </section>
  )
}
