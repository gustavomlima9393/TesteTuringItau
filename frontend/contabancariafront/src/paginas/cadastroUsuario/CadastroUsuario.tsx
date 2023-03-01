import React, { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";
import { Grid, Typography, Button, TextField } from "@material-ui/core";
import { Box } from '@mui/material';
import { Link } from "react-router-dom";
import "./CadastroUsuario.css";
import { toast } from "react-toastify";
import Conta from "../../models/Conta";

function CadastroUsuario() {

    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
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
            numero: null,
            agencia: null,
            saldo: 0
        }
    )

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updateUser(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    function updateConta(e: any) {
        setConta({
            ...conta,
            [e.target.name]: e.target.value
        })

        setUser({
            ...user,
            contas: [conta]
        })
    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        
        console.log(user)
        if (confirmarSenha == user.senha) {
            cadastroUsuario(`clientes/cadastrar`, user, setUserResult)
            toast.success("Usuario cadastrado com sucesso", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            toast.error("Dados inconsistentes. Favor verificar as informações de cadastro", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
    }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" className='caixaUsuario'>
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} className="containerUsuario" >
            <form onSubmit={onSubmit}>
              <Typography
                variant="h3"
                gutterBottom
                color="textPrimary"
                component="h3"
                align="center"
                className="textos2"
                        >
                            Cadastrar
                        </Typography>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updateUser(e)}
                            id="nome"
                            label="Nome Completo"
                            variant="outlined"
                            name="nome"
                            margin="normal"
                            className="cor-interna"
                            fullWidth
                        />
                        <TextField value={user.cpf} onChange={(e: ChangeEvent<HTMLInputElement>) => updateUser(e)}
                            id="cpf"
                            label="Usuário (CPF)"
                            variant="outlined"
                            name="cpf"
                            margin="normal"
                            className="cor-interna"
                            fullWidth
                        />
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateUser(e)}
                            helperText="Ex: @Tt12345"
                            id="senha"
                            label="Senha"
                            variant="outlined"
                            name="senha"
                            margin="normal"
                            type="password"
                            className="cor-interna"
                            fullWidth
                        />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            id="confirmarSenha"
                            label="Confirmar Senha"
                            variant="outlined"
                            name="confirmarSenha"
                            margin="normal"
                            type="password"
                            className="cor-interna"
                            fullWidth
                        />
                        <TextField value={conta.numero} onChange={(e: ChangeEvent<HTMLInputElement>) => updateConta(e)}
                            helperText="Ex: 1990"
                            id="numero"
                            label="Número da conta"
                            variant="outlined"
                            name="numero"
                            margin="normal"
                            className="cor-interna"
                            fullWidth
                        />
                        <TextField value={conta.agencia} onChange={(e: ChangeEvent<HTMLInputElement>) => updateConta(e)}
                            helperText="Ex: 3554"
                            id="agencia"
                            label="Número da agência"
                            variant="outlined"
                            name="agencia"
                            margin="normal"
                            className="cor-interna"
                            fullWidth
                        />
                        <Box marginTop={2} textAlign="center">
                            <Link to="/login" className="text-decorator-none">
                                <Button variant="contained" color="secondary" className="btnCancelar">
                                    Cancelar
                                </Button>
                            </Link>
                            <Button onClick={(e => updateConta(e))} type="submit" variant="contained" color="primary">
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CadastroUsuario;