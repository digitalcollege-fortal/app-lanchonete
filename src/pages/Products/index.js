import React from "react";
import {
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
    Divider,
    Button,
    Typography
} from "@mui/material";

import "./styles.css";

export default function Products() {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:8000/produtos')
            .then(res => res.json())
            .then(dados => setItems(dados));
            //npx json-server db.json --port 8000
    }, []);

    const CadaProduto = (props) => {
        return (
            <Card style={{marginTop: '10px'}}>
                <CardActionArea>
                    <CardMedia component="img" height="200" image={props.foto}/>
                    
                    <CardContent>
                        <Typography variant="h5">{props.nome}</Typography>
                    </CardContent>
                </CardActionArea>

                <CardContent>
                    <Divider/>
                    <div style={{display: 'flex', marginTop: 10, justifyContent: 'space-between'}}>
                        <Typography>R$ {props.valor}</Typography>

                        <Button align="right" variant="contained" color="success">Add</Button>
                    </div>
                </CardContent>
            </Card>
        )
    }

    return (
        <div className="page-products">
            <h2>Quantidade de produtos {items.length}</h2>
            
            <hr/>

            {/* {items.map( p => <CadaProduto nome={p.nome} valor={p.valor} /> )} */}

            {items.map( p => <CadaProduto {...p} /> )}

        </div>
    )
}