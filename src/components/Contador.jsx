import React from 'react'

export const Contador = (props) => {
    const [contador, setContador] = React.useState(props.inicial);

    const aumentar = () => {
        setContador(contador + props.factor )
    };
    const disminuir = () => {
        setContador(contador - props.factor )
    };

    return (
        <div>
            <h1>Contador: {contador} </h1>
            <hr />      
            <button onClick={aumentar} >Aumenta</button>
            <button onClick={disminuir}>Disminuye</button>
        </div>
    )
}
