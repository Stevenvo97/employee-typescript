import axios from 'axios';

// Get List Employee
const getEmployeeList = () => axios.get('https://60891307a6f4a30017427876.mockapi.io/employee');
// Add Employee
const addEmployee = (data: object) =>
  axios.post('https://60891307a6f4a30017427876.mockapi.io/employee', data);

export default {
  getEmployeeList,
  addEmployee,
};
