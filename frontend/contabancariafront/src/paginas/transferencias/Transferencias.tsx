import React, { ChangeEvent, useState } from "react";
import { Grid, Box, TextField } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { Button } from '@mui/material';
import './Transferencias.css';
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import Conta from './../../models/Conta';

function Transferencias() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const [Conta, setConta] = useState<Conta>(
        {
            id: 0,
            numero: 0,
            agencia: 0,
            saldo: 0
        })


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setConta({
            ...Conta,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log('Conta:' + Conta);
    }
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" className='caixaLogin'>
            <Grid alignItems="center" xs={6} className="containerLogin">
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
                            Faça sua transferência
                        </Typography>
                        <TextField
                            value={Conta.numero} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="numero"
                            label="Número da conta"
                            variant="outlined"
                            name="numero"
                            margin="normal"
                            className="cor-interna"
                            fullWidth
                        />
                        <TextField
                            value={Conta.agencia} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="agencia"
                            label="Agência"
                            variant="outlined"
                            name="agencia"
                            margin="normal"
                            className="cor-interna"
                            fullWidth
                        />
                        <TextField
                            
                            id="valor"
                            label="Valor da transferência"
                            variant="outlined"
                            name="valor"
                            margin="normal"
                            className="cor-interna"
                            fullWidth
                        />
                        <TextField
                            
                            id="tipo"
                            label="PIX, DOC OU TED"
                            variant="outlined"
                            name="tipo"
                            margin="normal"
                            className="cor-interna"
                            fullWidth
                        />
                        <Box marginTop={2} textAlign='center'>
                            <Link to="/home" className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Transferir
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Transferencias;