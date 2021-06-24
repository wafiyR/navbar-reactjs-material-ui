import React from 'react';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Footer from './components/Footer';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'ABeeZee',
      //'cursive',
    ].join(','),
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">

        <Header/>

        <Footer/>

      </div>
    </ThemeProvider>
  );
}

//export default App;
