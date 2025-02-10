import React from 'react';
import { Container, Grow, Grid } from '@mui/material';  

import Post from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memoriesLogo.png';
import { AppBar, Heading, Image, MainContainer } from './styles';

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Heading variant="h2" align="center">Memories</Heading>
        <Image src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <MainContainer container justify='space-between' alignItems='stretch' columnSpacing={20} columns={12}>
            <Grid  width={7/12}>
              <Post />
            </Grid>
            <Grid >
              <Form />
            </Grid>
          </MainContainer>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;