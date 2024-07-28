// routes/employees.js
const express = require('express');
const router = express.Router();

// Initialize employee data
let employees = [
  { id: 1, name: 'ajantha', course: 'head', roll_no: '1001' },
  { id: 2, name: 'dax', course: 'desiginer', roll_no: '1002' },
  { id: 3, name: 'lax', course: '', roll_no: '1003' }
];

// Get all employees
router.get('/', (req, res) => {
  res.json(employees);
});

// Get a single employee by ID
router.get('/:id', (req, res) => {
  const employee = employees.find(emp => emp.id === parseInt(req.params.id));
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ error: 'Employee not found' });
  }
});

// Add a new employee
router.post('/', (req, res) => {
  const { name, course, roll_no } = req.body;
  const newEmployee = {
    id: employees.length + 1,
    name,
    course,
    roll_no
  };
  employees.push(newEmployee);
  res.status(201).json({ message: 'Employee added successfully' });
});

// Update an employee record by ID
router.put('/:id', (req, res) => {
  const { name, course, roll_no } = req.body;
  const employee = employees.find(emp => emp.id === parseInt(req.params.id));
  if (employee) {
    employee.name = name;
    employee.course = course;
    employee.roll_no = roll_no;
    res.status(201).json({ message: 'Employee updated successfully' });
  } else {
    res.status(404).json({ error: 'Employee not found' });
  }
});

// Partially update an employee record by ID
router.patch('/:id', (req, res) => {
  const { name, course, roll_no } = req.body;
  const employee = employees.find(emp => emp.id === parseInt(req.params.id));
  if (employee) {
    if (name) employee.name = name;
    if (course) employee.course = course;
    if (roll_no) employee.roll_no = roll_no;
    res.status(201).json({ message: 'Employee partially updated successfully' });
  } else {
    res.status(404).json({ error: 'Employee not found' });
  }
});

// Delete an employee by ID
router.delete('/:id', (req, res) => {
  const employeeIndex = employees.findIndex(emp => emp.id === parseInt(req.params.id));
  if (employeeIndex !== -1) {
    employees.splice(employeeIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Employee not found' });
  }
});

module.exports = router;
