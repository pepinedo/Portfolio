import "./botonSeccion.css"

export function BotonSeccion({handleClick, seccion, variable}){
    return(
            <button 
                onClick={()=>handleClick(seccion)}
                className={`botonesSection__boton ${variable && "botonesSection__boton--active"}`}
            >
                {seccion}
                <div className="botonesSection__boton__subrallado"></div>
            </button>
    )
}