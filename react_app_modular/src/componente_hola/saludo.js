
const Nuestrosaludo = (props) => {
    const {saludoname, descripcion} = props;
    return (
        <div> 
            <h1> {saludoname} </h1>
            <h4>  {descripcion} </h4>
        </div>
    )

}
export default Nuestrosaludo;