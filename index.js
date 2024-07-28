const express = require('express');
const app = express();
const PORT = 5000;

const employeeRoutes = require('./routes/employees');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/employees', employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});