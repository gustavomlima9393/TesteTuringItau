import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./Navbar.css";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { useNavigate } from "react-router-dom";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { useDispatch } from "react-redux";
import { addToken } from "../../../store/tokens/actions";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Navbar() {
  
    return (
      <AppBar position="static">
        <Toolbar variant="dense" className="NavBar">
          <Box className="cursor">
            <Typography variant="h5" color="inherit" className="links">
              Teste Turing
            </Typography>
          </Box>
          <Grid container justifyContent="flex-end">
            <Box display="flex" justifyContent="space-around">
              <Link to="/home" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit" className="links">
                    Home
                  </Typography>
                </Box>
              </Link>
              <Link to="/transferencias" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit" className="links">
                    Transferências
                  </Typography>
                </Box>
              </Link>
              <Link to="/depositos" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit" className="links">
                    Depósitos
                  </Typography>
                </Box>
              </Link>
              <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit" className="links">
                    Logout
                  </Typography>
                </Box>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
  
export default Navbar;