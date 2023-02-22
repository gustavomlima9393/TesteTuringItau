import React from "react";
import { Grid, Box, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { Button } from '@mui/material';
import './Transferencias.css';

function Transferencias() {

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
        <Grid alignItems='center' xs={6}>
            <Box paddingX={20}>
                <form>
                    <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold' }}>Realize seu depósito</Typography>
                    <TextField id='numero' label='Número da conta' variant='outlined' name='numero' margin='normal' fullWidth />
                    <TextField id='agencia' label='Número da agência' variant='outlined' name='agencia' margin='normal' fullWidth />
                    <TextField id='valor' label='Valor do depósito' variant='outlined' name='valor' margin='normal' fullWidth />
                    <TextField id='tipo' label='PIX, DOC OU TED' variant='outlined' name='valor' margin='normal' fullWidth />
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
        <Grid xs={6}>

        </Grid>
    </Grid>
);
}
export default Transferencias;