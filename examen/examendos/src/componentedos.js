function componentedos(props){
    return(
        <div className="caja-main">
            <div className="caja-main-uno">
                <div className="cajauno">
                    <img className="foto" src="logo192.png"></img>
                </div>
                <div className="texto">
                    <h1>TITULO PARRAFO</h1>
                    <p>nuestros docentes son de{props.pais} españa y se titularon en la academia gatito</p>
                </div>
                <div className="cajauno">
                    <img className="foto" src="logo192.png"></img>
                </div>
            </div>

            <div className="caja-main-dos">
                <div className="texto">
                    <h1>TITULO PARRAFO</h1>
                    <p>nuestros docentes son de{props.pais} españa y se titularon en la academia gatito</p>
                </div>
                <div className="cajauno">
                    <img className="foto" src="logo192.png"></img>
                </div>
                <div className="texto">
                    <h1>TITULO PARRAFO</h1>
                    <p>nuestros docentes son de{props.pais} españa y se titularon en la academia gatito</p>
                </div>
            </div>      
        </div>
    );
}
export default componentedos;