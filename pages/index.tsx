import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";

'/api/avo'

const Home = () => {

    const [productList, setProductList] = useState<Tproduct[]>([])

    useEffect(() => {
        window
        .fetch('/api/avo')
        .then(response => response.json())
        .then(({data,length}) => {
            setProductList(data)
        })
    }, []);

    return(
        <div>
            <Navbar />
            <h1>Hola Platzi!</h1>
            {productList.map((product)=> (
                <div>{product.name}</div>
            ))}
        </div>
    );
};

export default Home;