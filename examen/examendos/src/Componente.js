function Componente(props){
    return(
        <div className="caja2">
           
                <div className="img1">
                    <img className="foto2" src="images.jpg" />
        
                </div>
                <div className="texto2">
                     <h1>TITULO PARRAFO</h1>
                    <p>nuestros docentes son de{props.pais} españa y se titularon en la academia gatito</p>
                

                </div>
                <div className="img2">
                    <img className="foto2" src="images.jpg" />
        
                </div>
            
        </div>


    );
}
export default Componente;