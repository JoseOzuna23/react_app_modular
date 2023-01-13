const Listas = (props) => {
    const {uno,dos,tres,cuatro,cinco} = props;
    return (
        <div> 
            <li> {uno} </li>
            <li> {dos} </li>
            <li> {tres} </li>
            <li> {cuatro} </li>
            <li> {cinco} </li>
        </div>
    )

}
export default Listas;