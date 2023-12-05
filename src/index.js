const fs = require('fs');
const path = require('path');
const pdfGenerator = require('./utils/pdfGenerator');

// Define the path to the template PDF
const templatePath = path.join(__dirname, 'pdfTemplates', 'myTemplate.pdf');

// Define the data for the text and input fields
const data = {
  textField1: 'This is text field 1',
  textField2: 'This is text field 2',
  inputField1: 'This is input field 1',
  inputField2: 'This is input field 2',
};

// Generate the PDF
pdfGenerator(templatePath, data)
  .then(async (pdfBytes) => {
    // Write the PDF bytes to a file
   fs.writeFileSync('output.pdf', pdfBytes);
    console.log('PDF has been created successfully!');
  })
  .catch((error) => {
    console.error('Error while generating PDF:', error);
  });