function Saludo(props){
    return (
        <div>
            <h2>Hola, {props.usuario.nombre}</h2>
            <p>Edad: {props.usuario.edad}</p>
        </div>
    );
}


export default Saludo;