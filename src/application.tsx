import React from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps, Link } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, Menu, MenuItem } from '@material-ui/core';

import routes from './config/route';
import theme from './styles/theme';
import DialogEmployee from './components/DialogEmployee';
import SnackbarNotice from './components/SnackbarNotice';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Application: React.FunctionComponent<{}> = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Paper className={classes.root}>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Open Menu
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              {' '}
              <Link style={{ textDecoration: 'none' }} to="/">
                Page 1: Count
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {' '}
              <Link style={{ textDecoration: 'none' }} to="/page2">
                Page 2: Employee
              </Link>
            </MenuItem>
          </Menu>
        </Paper>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.component name={route.name} {...props} {...route.props} />
                )}
              />
            );
          })}
        </Switch>
        <DialogEmployee />
        <SnackbarNotice />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Application;
