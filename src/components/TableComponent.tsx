import React, { useEffect } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Grid, Typography } from '@material-ui/core';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useStoreState, useStoreActions } from '../config/hooks';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 140, type: 'number' },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'email', headerName: 'Email', width: 240, sortable: false },
  { field: 'position', headerName: 'Position', width: 200, sortable: false },
];

export default function TableComponent() {
  const { emloyeeList } = useStoreState((state) => state.employee);
  const { getEmployeeList } = useStoreActions((actions) => actions.employee);
  const { setOpen } = useStoreActions((actions) => actions.dialogEmployee);

  const handleOpenDailogEmployee = () => {
    setOpen(true);
  };

  useEffect(() => {
    getEmployeeList();
  }, []);

  return (
    <Grid style={{ height: 400, width: '100%' }}>
      <Grid onClick={handleOpenDailogEmployee}>
        <Typography style={{ display: 'flex', justifyContent: 'flex-end', cursor: 'pointer' }}>
          <AddIcon /> Add Employee
        </Typography>
      </Grid>
      <DataGrid rows={emloyeeList} columns={columns} pageSize={5} disableColumnMenu />
    </Grid>
  );
}
