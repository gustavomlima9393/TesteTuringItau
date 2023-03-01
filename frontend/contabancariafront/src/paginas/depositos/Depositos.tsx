import React, { useState, ChangeEvent, useEffect } from "react";
import { Grid, Box, TextField } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { Button, FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import './Depositos.css';
import Conta from './../../models/Conta';
import { TokenState } from "../../store/tokens/tokensReducer";
import { useSelector } from "react-redux";
import { buscaCpf, post } from "../../services/Service";
import User from "../../models/User";
import { DepositoRequestDTO } from "../../models/DepositoRequestDTO";

function Depositos() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const cpf = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.cpf
    );

    const [conta, setConta] = useState<Conta>(
        {
            id: 0,
            numero: 0,
            agencia: 0,
            saldo: 0
        })

        const [user, setUser] = useState<User>(
            {
                id: 0,
                nome: "",
                cpf: "",
                senha: "",
                contas: []
            })

    const [deposito, setDeposito] = useState<DepositoRequestDTO> ({} as DepositoRequestDTO)


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setDeposito({
            agencia: user.contas[0]?.agencia,
            numeroConta: user.contas[0].numero,
            valor: +e.target.value
        })
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

    console.log(user)

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log(deposito);

        post('/contas/depositar', deposito, setDeposito, {
            headers: {
                Authorization: token
            }
        })
    }
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" className='caixaDepositos'>
            <Grid alignItems="center" xs={6} className="containerDepositos">
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography
                            variant="h3"
                            gutterBottom
                            color="textPrimary"
                            component="h3"
                            align="center"
                            className="textos2"
                        >
                            Faça seu depósito
                        </Typography>
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
                        <FormControl fullWidth>
                        <InputLabel htmlFor="outlined-adornment-amount">Valor do depósito</InputLabel>
                        <OutlinedInput
                            value={deposito.valor} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="valor"
                            startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                            label="Valor do depósito"
                            name="valor"
                            className="cor-interna"
                        />
                        </FormControl>
                        <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Depositar
                                </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Depositos;