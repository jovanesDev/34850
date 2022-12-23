import React from 'react'
import Button from '../Button/Button';
import Input from '../Input/Input';
import TextComponent from '../TextComponent/TextComponent';

const Dynamic = ({component}) => {
    switch (component.type) {
        case 'input':
            return <Input type={component.atr}/>
        case 'button' :
            return <Button/>
        case 'titulo':
            return <TextComponent size={component.atr.size} text={component.atr.text} />
        
        default :
        return <h1>No existe el componente que quieres cargar</h1>
    }
}

export default Dynamic