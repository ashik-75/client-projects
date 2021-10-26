import { TextField, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyle = makeStyles({
  root: {
    minHeight: '100vh',
    marginTop: 50,
  },
});

const AddProduct = () => {
  const classes = useStyle();
  return (
    <Container className={classes.root}>
      <form>
        <TextField label="Title" id="fullWidth" />
        <TextField label="description" id="fullWidth" />
        <TextField label="price" id="fullWidth" />
        <TextField label="Title" id="fullWidth" />
      </form>
    </Container>
  );
};

export default AddProduct;
