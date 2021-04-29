import React, { useState, useEffect } from 'react';
import { useStoreState, useStoreActions } from '../config/hooks';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import {
  Table,
  TablePagination,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    maxWidth: 700,
  },
});

export default function TableComponent() {
  const classes = useStyles();
  const { emloyeeList } = useStoreState((state) => state.employee);
  const { getEmployeeList } = useStoreActions((actions) => actions.employee);
  const { setOpen } = useStoreActions((actions) => actions.dialogEmployee);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (even: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleOpenDailogEmployee = () => {
    setOpen(true);
  };

  useEffect(() => {
    getEmployeeList();
  }, []);
  return (
    <TableContainer component={Paper} aria-label="caption table" className={classes.table}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Position</TableCell>
          </TableRow>
        </TableHead>
        {emloyeeList.length !== 0 && (
          <TableBody>
            {emloyeeList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.position}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        )}
      </Table>
      <caption style={{ display: 'flex', cursor: 'pointer' }} onClick={handleOpenDailogEmployee}>
        <AddIcon /> Add Employee
      </caption>
      <TablePagination
        rowsPerPageOptions={[5]}
        component="div"
        count={emloyeeList.length}
        rowsPerPage={5}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      ></TablePagination>
    </TableContainer>
  );
}
