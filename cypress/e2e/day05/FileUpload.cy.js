/// reference types="cypress" />
describe('File Upload', () => {
  it('Single File Upload', () => {
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
    const path1 = 'Bilder1.JPG';
    cy.get('#filesToUpload').attachFile(path1);
    cy.get('#fileList > li').should('have.text', 'Bilder1.JPG ');
  });
  it('Multiple File Upload 1', () => {
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
    const path1 = 'Bilder1.JPG';
    const path3 = 'Bilder2.JPG';
    const path2 = 'bilder3.JPG';
    cy.get('#filesToUpload')
      .attachFile(path1)
      .attachFile(path2)
      .attachFile(path3);
  });
  it.only('OverWrite File Name', () => {
       cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
         const path1 = 'Bilder1.JPG';
        cy.get('#filesToUpload').attachFile({filePath:path1,fileName:'image01.jpg'});
  });
});
