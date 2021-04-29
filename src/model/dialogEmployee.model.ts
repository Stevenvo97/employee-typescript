import { Action, action } from 'easy-peasy';

export interface DialogEmployeeModel {
  open: boolean;
  setOpen: Action<DialogEmployeeModel, boolean>;
}

const dialogEmployee: DialogEmployeeModel = {
  open: false,
  setOpen: action((state, payload) => {
    state.open = payload;
  }),
};

export default dialogEmployee;
