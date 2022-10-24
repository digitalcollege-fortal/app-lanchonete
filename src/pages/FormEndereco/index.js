import {Button, TextField} from "@mui/material";
import {useState} from "react";
import "./styles.css";

export default function FormEndereco () {
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  //github.com/digitalcollege-fortal/app-endereco

  const buscarEndereco = () => {
      fetch(`http://viacep.com.br/ws/${cep}/json`)
        .then(res => res.json())
        .then(dados => {
          setBairro(dados.bairro);
          setLogradouro(dados.logradouro);
          setCidade(dados.localidade);
          setEstado(dados.uf); //de para  

        });
  };

  return (
    <div className="endereco">
      <form>
        <TextField onBlur={buscarEndereco} onChange={event => setCep(event.target.value)} value={cep} label="CEP" fullWidth/>
        
        <TextField value={logradouro} onChange={event => setLogradouro(event.target.value)} label="Logradouro" fullWidth/>

        <TextField value={bairro} onChange={event => setBairro(event.target.value)} label="Bairro" fullWidth/>
      
        <TextField value={cidade} onChange={event => setCidade(event.target.value)} label="Cidade" fullWidth/>

        <TextField value={estado} onChange={event => setEstado(event.target.value)} label="Estado" fullWidth/>
      </form>
    </div>
  )
}