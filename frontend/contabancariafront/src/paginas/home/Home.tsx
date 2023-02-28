import React, { useState, ChangeEvent, useEffect } from "react";
import { Grid, Box, TextField } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import './Home.css';
import { TokenState } from "../../store/tokens/tokensReducer";
import { useSelector } from "react-redux";
import Conta from "../../models/Conta";
import User from "../../models/User";
import { buscaCpf } from "../../services/Service";


function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const cpf = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.cpf
    );

    console.log(cpf)

    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: "",
            cpf: "",
            senha: "",
            contas: []
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: "",
            cpf: "",
            senha: "",
            contas: []
        })

    const [conta, setConta] = useState<Conta>(
        {
            id: 0,
            numero: 0,
            agencia: 0,
            tipo: "",
            saldo: 0,
         })
    
    const [contaResult, setContaResult] = useState<Conta>(
        {
            id: 0,
            numero: 0,
            agencia: 0,
            tipo: "",
            saldo: 0,
        })
        
    
function updatedModel(e: React.ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
}

async function getDados() {
    await buscaCpf(`/clientes/${cpf}`, setUser, {
        headers: {
            Authorization: token
        }
    })
}

useEffect(() => {
    getDados()
}, [])

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" className='caixaHome'>
            <Grid alignItems="center" xs={6} className="containerHome">
                <Box paddingX={20}>
                    <>
                        <Typography
                            variant="h3"
                            gutterBottom
                            color="textPrimary"
                            component="h3"
                            align="center"
                            className="textos2"
                        >
                            Dados da conta
                        </Typography>
                        <TextField
                            value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="nome"
                            label="Nome"
                            variant="outlined"
                            name="nome"
                            margin="normal"
                            className="cor-interna"
                            fullWidth
                            InputLabelProps={{ shrink: true }} //impede que o Label cubra a informação da caixa
                        />
                        <TextField
                            value={user.cpf} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="usuario"
                            label="CPF"
                            variant="outlined"
                            name="usuario"
                            margin="normal"
                            className="cor-interna"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                        />
                        <TextField
                            value={user.contas[0]?.numero} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="numero"
                            label="Número da conta"
                            variant="outlined"
                            name="numero"
                            margin="normal"
                            className="cor-interna"
                            fullWidth
                            InputLabelProps={{ shrink: true }} 
                        />
                        <TextField
                            value={user.contas[0]?.agencia} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="agencia"
                            label="Agência"
                            variant="outlined"
                            name="agencia"
                            margin="normal"
                            className="cor-interna"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                        />
                        <TextField
                            value={user.contas[0]?.saldo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="saldo"
                            label="Saldo"
                            variant="outlined"
                            name="saldo"
                            margin="normal"
                            className="cor-interna"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                        />
                    </>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Home;