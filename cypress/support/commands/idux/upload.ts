
const uploadFiles = {
  /** 断言文件列表的文本 */
  iUploadFiles_haveText(selector: string, text: string, index = 0) {
    return cy.get(selector)
      .eq(index)
      .find('.ix-upload-name')
      .should('contain.text', text);
  },
  /** 点击重新上传 */
  iUploadFiles_retryUpload(selector: string, index = 0) {
    return cy.get(selector)
      .eq(index)
      .find('.ix-upload-icon-retry')
      .click();
  },
  /** 删除指定文件 */
  iUploadFiles_removeFile(selector: string, index = 0) {
    return cy.get(selector)
      .eq(index)
      .find('.ix-upload-icon-remove')
      .click();
  },
};

export default {
  /** 获取input */
  iUpload_selectFile(selector: string) {
    return cy.get(selector)
      .find('.ix-upload-input[type="file"]')
      .then($el => {
        $el.css('display', 'block');
      })
      .selectFile({
        contents: Cypress.Buffer.from('file contents'),
        fileName: 'file.txt',
        lastModified: Date.now(),
      })
      .get(selector)
      .find('.ix-upload-input[type="file"]')
      .then($el => {
        $el.css('display', 'none');
      });
  },
  ...uploadFiles,
};
