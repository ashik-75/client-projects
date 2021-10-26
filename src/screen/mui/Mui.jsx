import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
const useStyle = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
}));

const Mui = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Button variant="text">Text</Button>
      <Button variant="contained">Text</Button>
    </div>
  );
};

export default Mui;
