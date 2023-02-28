import React, { ChangeEvent, useState, useEffect } from "react";
import { Grid, Box, TextField } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { Button } from '@mui/material';
import './Transferencias.css';
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import Conta from './../../models/Conta';
import { buscaConta, buscaCpf, post } from "../../services/Service";
import User from "../../models/User";
import { TransferenciaRequestDTO } from '../../models/TransferenciaRequestDTO';

function Transferencias() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const cpf = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.cpf
    );

    const [user, setUser] = useState<User>(
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
            saldo: 0
        })

    const [contaOrigem, setContaOrigem] = useState<Conta> ({} as Conta)

    useEffect(() => {
        setContaOrigem({
                numero: user.contas[0]?.numero,
                agencia: user.contas[0]?.agencia,
                tipo: user.contas[0]?.tipo,
                saldo: user.contas[0]?.saldo,
                id: user.contas[0]?.id
            })
        }, [user])

        

    const [transferencia, setTransferencia] = useState<TransferenciaRequestDTO> ({} as TransferenciaRequestDTO)

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setConta({
            ...conta,
            [e.target.name]: e.target.value
        })
    }
    function updateTransfer(e: ChangeEvent<HTMLInputElement>) {
        setTransferencia({
            ...transferencia,
            [e.target.name]: e.target.value,
            contaOrigem: contaOrigem,
            contaDestino: conta
        })
    }

    let contaPesquisa = {
        numero: conta.numero,
        agencia: conta.agencia
    }

    async function buscarConta(){
        console.log('buscando...')
        console.log(conta)
        await buscaConta(`/contas/${conta.agencia}/${conta.numero}`, setConta, {
            headers: {
                Authorization: token
            }
        })
    }
    
    useEffect(() => {
        buscarConta()
        // setConta({
        //     ...conta,
        //     saldo: conta.saldo
        // })
    }, [transferencia])
    
    console.log(conta)
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(transferencia);
        post('/transferencias/transferir', transferencia, setTransferencia, {
            headers: {
                Authorization: token
            }
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
                            value={conta.numero} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
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
                            value={conta.agencia} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
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
                            value={transferencia.valorTransferencia} onChange={(e: ChangeEvent<HTMLInputElement>) => updateTransfer(e)}
                            id="valorTransferencia"
                            label="Valor da transferência"
                            variant="outlined"
                            name="valorTransferencia"
                            margin="normal"
                            className="cor-interna"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                        />
                        <TextField
                            value={transferencia.tipoTransferencia} onChange={(e: ChangeEvent<HTMLInputElement>) => updateTransfer(e)}
                            id="tipoTransferencia"
                            label="PIX, DOC OU TED"
                            variant="outlined"
                            name="tipoTransferencia"
                            margin="normal"
                            className="cor-interna"
                            fullWidth
                        />
                        <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Transferir
                                </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Transferencias;