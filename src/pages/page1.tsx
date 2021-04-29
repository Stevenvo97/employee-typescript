import React, { useState, FC } from 'react';
import { Container, Box, Typography, Button, Grid } from '@material-ui/core';

interface IPage {
  name: string;
}

const Page1: FC<IPage & { initial?: number }> = ({ initial = 0 }) => {
  const [count, setCount] = useState(initial);

  const handleRefresh = () => {
    setCount(initial);
  };
  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <Container maxWidth="sm" color="default">
      <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Count: {count}
        </Typography>
        <Grid item xl={12} sm={6} container justify="space-between">
          <Button variant="contained" color="primary" onClick={handleRefresh}>
            Refresh
          </Button>
          <Button variant="contained" color="secondary" onClick={handleIncrease}>
            Increase
          </Button>
        </Grid>
      </Box>
    </Container>
  );
};
export default Page1;
