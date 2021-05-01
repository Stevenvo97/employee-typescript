import { Action, action, Thunk, thunk } from 'easy-peasy';
import emloyeeApi from '../services/employee.api';
import axios from 'axios';
import store from '../store';

interface Datas {
  id: number;
  name: string;
  email: string;
  position: string;
}

export interface EmployeeModel {
  emloyeeList: Datas[];
  setEmployeeList: Action<EmployeeModel, []>;
  getEmployeeList: Thunk<EmployeeModel>;
  addEmployee: Thunk<EmployeeModel, {}>;
}

const employee: EmployeeModel = {
  emloyeeList: [],
  setEmployeeList: action((state, payload) => {
    state.emloyeeList = state.emloyeeList.concat(payload);
  }),

  getEmployeeList: thunk(async (actions) => {
    const req = await emloyeeApi.getEmployeeList();
    actions.setEmployeeList(req.data);
  }),

  addEmployee: thunk(async (actions, payload) => {
    const result = await emloyeeApi.addEmployee(payload);
    if (result.status === 200 || result.status === 201) {
      actions.setEmployeeList(result.data);
      store.getActions().dialogEmployee.setOpen(false);
      store
        .getActions()
        .notice.setSnackbarNotice({ content: 'Add success', show: true, type: 'success' });
    } else
      store.getActions().notice.setSnackbarNotice({ content: 'Error', show: true, type: 'error' });
  }),
};

export default employee;
