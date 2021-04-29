import employee, { EmployeeModel } from './employee.model';
import dialogEmployee, { DialogEmployeeModel } from './dialogEmployee.model';
import notice, { NoticeModel } from './notice.model';

export interface StoreModel {
  employee: EmployeeModel;
  dialogEmployee: DialogEmployeeModel;
  notice: NoticeModel;
}

const model: StoreModel = {
  employee,
  dialogEmployee,
  notice,
};

export default model;
