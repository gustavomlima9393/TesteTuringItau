import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./Navbar.css";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { useDispatch } from "react-redux";
import { addToken } from "../../../store/tokens/actions";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(""));
    toast.info("Usuário deslogado", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      theme: "colored",
      progress: undefined,
    });
    navigate("/login");
  }

  let navbarComponent;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (token !== "") {
    navbarComponent = (
      <AppBar position="static" className={scrolled ? "scrolled" : ""}>
        <Toolbar variant="dense" className="NavBar">
          <Box className="cursor">
            <Typography variant="h5" color="inherit" className="links">
              Teste Turing Itaú
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
              <Box mx={1} className="cursor" onClick={goLogout}>
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

  return <>{navbarComponent}</>;
}

export default Navbar;