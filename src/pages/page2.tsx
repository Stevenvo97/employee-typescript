import React from 'react';
import { Grid } from '@material-ui/core';
import TableComponent from '../components/TableComponent';

interface IPage {
  name: string;
}
const Page2: React.FunctionComponent<IPage> = () => {
  return (
    <Grid style={{ display: 'flex', justifyContent: 'spaceBetween', alignItems: 'center' }}>
      <TableComponent />
    </Grid>
  );
};

export default Page2;
