import { ShoppingCart } from "@mui/icons-material";
import { Divider } from "@mui/material";
import React from "react";


import "./styles.css";

export default function Carrinho() 
{
    const [items, setItems] = React.useState([]);
    const [total, setTotal] = React.useState(0);

    React.useEffect(() => {
        fetch('http://localhost:8000/carrinho')
            .then(res => res.json())
            .then(dados => {
                setItems(dados);
                
                // setTotal(
                //     items.map(x => x.valor).reduce( (a, b) => a + b)
                // );
            });
    }, []);

    return (
        <div align="center">
            <h1> 
                - <ShoppingCart/> Carrinho -
            </h1>

            <Divider/>

            { items.map(cadaItem => {
                return (
                    <div className="carrinho-item">
                        <span>{cadaItem.quantidade}</span>

                        <span>{cadaItem.nome}</span>

                        <span>R$ {cadaItem.valor}</span>
                    </div>
                )
            }) }

            <br/>
            <strong>Total: R$ {total}</strong>
        </div>
    )
}