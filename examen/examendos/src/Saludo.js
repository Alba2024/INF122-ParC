function Saludo(props){
    return(
        <div className="caja1">
            <div className="texto">
                <h1>CURSO BALLET</h1>
                <p>nuestros docentes son de{props.pais} españa y se titularon en la academia gatito</p>

            </div>
            <div className="fotos">
                <img className="foto2" src={props.imagen} />

            </div>
            

    
        </div>


    );
}
export default Saludo;