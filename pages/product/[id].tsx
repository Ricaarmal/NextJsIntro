import React from "react";
import {useRouter} from 'next/router'

const productItem = () => {
    const router = useRouter()
    return(
        <div>Esta es la prueba del producto: {router.query.id}</div>
    )
}

export default productItem;

//Rutas dinamicas verificadas con router, componente router 'next/router' modulo {useRouter}
//Verificando el query nos ayuda a verificar el routeo.
//Se crea el preambulo del ruteo desde la carpeta correspondiente, aunque tendriamos que verificar
//Como realizar el proceso desde la pagina original.