import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Container, Select, MenuItem,  ThemeProvider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Crypto } from '../context/CryptoContext';
import { createTheme } from '@mui/material/styles';
const Navbar = () => {
  const navigate = useNavigate();
  const { setCurrency, currency } = useContext(Crypto);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff'
      },
      mode: 'dark'
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color='transparent' position='static' >
        <Container>
          <Toolbar>
            <Typography
              onClick={() => navigate("/")}
              variant='h6'
              sx={{
                flex: 1,
                color: '#fff',
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Crypto Finder
            </Typography>
            <Select
              variant='outlined'
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
                color: 'white' 
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              sx={{ '& .MuiSelect-root': { color: 'white' } }} 
            >
              <MenuItem value={"usd"}>USD</MenuItem>
              <MenuItem value={"inr"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
