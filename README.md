# My PDF Lib Project

This project uses the `pdf-lib` library to create a PDF with two text fields and two input fields. The PDF is created based on a template PDF file and a data object that contains the values for the text and input fields.

## Installation

Before you can use this project, you need to install its dependencies. Run the following command in your terminal:

```bash
npm install
```

This will install the `pdf-lib` library and `fs` for file system operations.

## Usage

To create a PDF, you need to use the `pdfGenerator` function from `src/utils/pdfGenerator.js`. This function takes two arguments:

1. A template PDF file
2. A data object

The template PDF file should be a path to a PDF file that contains placeholders for the text and input fields. The data object should be an object that contains the values for the text and input fields.

Here is an example of how to use the `pdfGenerator` function:

```javascript
const pdfGenerator = require('./utils/pdfGenerator');

const template = './pdfTemplates/myTemplate.pdf';
const data = {
  textField1: 'Hello, World!',
  textField2: 'This is a test.',
  inputField1: 'Input 1',
  inputField2: 'Input 2'
};

pdfGenerator(template, data);
```

This will create a new PDF based on the `myTemplate.pdf` file and replace the placeholders with the values from the `data` object.

## Contributing

If you want to contribute to this project, please submit a pull request. All contributions are welcome!

## License

This project is licensed under the MIT License.