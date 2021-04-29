import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useStoreState, useStoreActions } from '../config/hooks';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SnackbarNotice() {
  const classes = useStyles();
  const { noticeData } = useStoreState((state) => state.notice);
  const { setSnackbarNotice } = useStoreActions((actions) => actions.notice);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    setSnackbarNotice({ content: '', show: false, type: 'success' });
    if (reason === 'clickaway') {
      return;
    }
  };

  return (
    <div className={classes.root}>
      <Snackbar open={noticeData.show} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {noticeData.content}
        </Alert>
      </Snackbar>
    </div>
  );
}
