import { Action, action, Thunk, thunk } from 'easy-peasy';
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
  addEmployee: Thunk<EmployeeModel, object>;
}

const employee: EmployeeModel = {
  emloyeeList: [],
  setEmployeeList: action((state, payload) => {
    state.emloyeeList = payload;
  }),

  getEmployeeList: thunk(async (actions) => {
    const result = await axios.get('https://60891307a6f4a30017427876.mockapi.io/employee');
    actions.setEmployeeList(result.data);
  }),

  addEmployee: thunk(async (actions, payload) => {
    const result = await axios.post(
      'https://60891307a6f4a30017427876.mockapi.io/employee',
      payload,
    );
    console.log(result);
    if (result.status === 200 || result.status === 201) {
      actions.getEmployeeList();
      store.getActions().dialogEmployee.setOpen(false);
      store
        .getActions()
        .notice.setSnackbarNotice({ content: 'Add success', show: true, type: 'success' });
    } else
      store.getActions().notice.setSnackbarNotice({ content: 'Error', show: true, type: 'error' });
  }),
};

export default employee;
