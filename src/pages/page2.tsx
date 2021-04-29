import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import TableComponent from '../components/TableComponent';

interface IPage {
  name: string;
}
const Page2: React.FunctionComponent<IPage> = () => {
  return (
    <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid style={{ width: 800, paddingTop: 50 }}>
        <TableComponent />
      </Grid>
    </Grid>
  );
};

export default Page2;
