import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Post from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memoriesLogo.png';
import { AppBar, Heading, Image, MainContainer } from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Heading variant="h2" align="center">Memories</Heading>
        <Image src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <MainContainer container alignItems='stretch' spacing={3}>
            <Grid item xs={12} md={7}>
              <Post setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} md={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </MainContainer>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;