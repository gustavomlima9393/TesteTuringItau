import React, { useState, useEffect, ChangeEvent } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import "./Login.css";
import { useDispatch } from "react-redux";
import { addCPF, addId, addToken } from "../../store/tokens/actions";
import { toast } from "react-toastify";

function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  
  const [userLogin, setUserLogin] = useState<UserLogin>(
    {
      id: 0,
      cpf: "",
      senha: "",
      token: ""
    }
  );

  const [respUserLogin, setRespUserLogin] = useState<UserLogin>(
    {
      id: 0,
      cpf: "",
      senha: "",
      token: ""
    }
  );

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if (
      userLogin.cpf !== '' &&
      userLogin.senha !== '' &&
      userLogin.senha.length >= 8
    ) {
      setForm(true);
    }
  }, [userLogin]);

  const [form, setForm] = useState(false);

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(userLogin)
    try {
      await login ("/clientes/logar", userLogin, setRespUserLogin);
      console.log(respUserLogin)
      toast.success("Usuario logado com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
    });
    } catch (error) {
      toast.error("Dados do usuário inconsistentes. Erro ao logar!", {
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

  useEffect(() => {
    if (token !== '') {
      dispatch(addToken(token));
      navigate('/home');
    }
  }, [token]);

  //metodo para pegar o token e o id do json e guardar no redux
  useEffect(() => {
    if (respUserLogin.token !== '') {
      dispatch(addToken(respUserLogin.token));
      dispatch(addId(respUserLogin.id.toString()));
      dispatch(addCPF(respUserLogin.cpf));
      navigate('/home');
    }
  }, [respUserLogin.token]);

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
              Entrar
            </Typography>
            <TextField
              value={userLogin.cpf} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="cpf"
              label="Usuário (CPF)"
              variant="outlined"
              name="cpf"
              margin="normal"
              className="cor-interna"
              fullWidth
            />
            <TextField
              value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senha"
              label="Senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              className="cor-interna"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Button type="submit" variant="contained" color="primary">
                Logar
              </Button>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography variant="subtitle1" gutterBottom align="center">
                Não tem uma conta?
              </Typography>
            </Box>
            <Link to="/cadastrousuario">
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                className="textos1"
              >
                Cadastre-se
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;