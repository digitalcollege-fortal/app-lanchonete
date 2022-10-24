import {Button, TextField} from "@mui/material";
import {useState} from "react";
import "./styles.css";

export default function App () {
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');

  const buscarEndereco = () => {
      fetch(`http://viacep.com.br/ws/${cep}/json`)
        .then(res => res.json())
        .then(dados => {
          setBairro(dados.bairro);
          setLogradouro(dados.logradouro);
        });
  };

  return (
    <div className="endereco">
      <form>
        <TextField onBlur={buscarEndereco} onChange={event => setCep(event.target.value)} value={cep} label="CEP" fullWidth/>
        
        <TextField value={logradouro} label="Logradouro" fullWidth/>

        <TextField value={bairro} label="Bairro" fullWidth/>
      </form>
    </div>
  )
}