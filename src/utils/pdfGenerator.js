const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');
const fs = require('fs');

async function pdfGenerator(templatePath, data) {
    // Load the template PDF
    const templateBytes = fs.readFileSync(templatePath);
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();

    // Embed the Helvetica font
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // Get the first page of the document
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    // Create the text fields
    firstPage.drawText(data.textField1, {
        x: 50,
        y: 500,
        size: 50,
        font: helveticaFont,
        color: rgb(0, 0, 0),
    });
    firstPage.drawText(data.textField2, {
        x: 50,
        y: 450,
        size: 50,
        font: helveticaFont,
        color: rgb(0, 0, 0),
    });

    // Create the input fields
    const form = pdfDoc.getForm();
    const textField1 = form.createTextField('inputField1');
    textField1.setText(data.inputField1);
    textField1.addToPage(firstPage, { x: 50, y: 400 });

    const textField2 = form.createTextField('inputField2');
    textField2.setText(data.inputField2);
    textField2.addToPage(firstPage, { x: 50, y: 350 });

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();

    // Write the generated PDF to a file
    return pdfBytes;
}

module.exports = pdfGenerator;