const qstr = require('../qtools/qstr');

// TODO: all tests

export const getApplicationBaseDirectory = () => {
  const actualDirectory = __dirname; // e.g. 'C:\edward\nwo\onespace\src\dpodreact\qtools'
  const baseDirectory = qstr.chopRight(actualDirectory, '\\src\\datapod\\qtools');
  return baseDirectory;
};

// from: C:\\edward\\nwo\\onespace\\src\\App.js
// to: src/App.js
export const convertAbsoluteWindowsPathAndFileNameToPathAndFileName = (absoluteWindowsPathAndFileName: string) => {
  let r = absoluteWindowsPathAndFileName;
  r = qstr.replaceAll(r, '\\', '/');
  r = qstr.chopLeft(r, 'C:/edward/nwo/onespace/');
  return r;
};
