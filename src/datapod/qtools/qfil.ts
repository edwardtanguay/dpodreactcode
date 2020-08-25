//import mkdirp from 'mkdirp';
const mkdirp = require('mkdirp');
const fs = require('fs');
const qsys = require('../qtools/qsys');
const qstr = require('../qtools/qstr');
const qfil = require('../qtools/qfil');

// TODO: write tests for all 

export const forceCreateDirectory = (relativeDirectoryName: string) => {
	mkdirp.sync(relativeDirectoryName);
};

export const copyFileForceDirectories = (sourcePathAndFileName: string, targetPathAndFileName: string) => {
	const directory = (qfil.getDirectoryAndFileNameFromRelativePathAndFileName(targetPathAndFileName))[0];
	qfil.forceCreateDirectory(directory);
	qfil.copyFile(sourcePathAndFileName, targetPathAndFileName);
};

export const copyFile = (sourcePathAndFileName: string, targetPathAndFileName: string) => {
	fs.createReadStream(sourcePathAndFileName).pipe(fs.createWriteStream(targetPathAndFileName));
};

// e.g. "../n49901_dpnversion/systemPages/createPage.ejs" returns :
// [0] = "../n49901_dpnversion/systemPages"
// [1] = "createPage.ejs"
export const getDirectoryAndFileNameFromRelativePathAndFileName = (relativePathAndFileName: string) => {
	if (qstr.contains(relativePathAndFileName, '/')) {
		const parts: string[] = qstr.breakIntoParts(relativePathAndFileName, '/');
		console.log(relativePathAndFileName);
		console.log(parts);
		const fileName: any = parts.pop();
		const directory: string = parts.join('/');
		return [directory, fileName];
	}
	return ['', relativePathAndFileName];
};

export const getSitePathAndFileNames = (absoluteDirectory: string = '', pathAndFileNamesOriginal: string[] = []) => {
	absoluteDirectory = absoluteDirectory || qsys.getApplicationBaseDirectory();
	const pathAndFileNames: string[] = pathAndFileNamesOriginal || [];

	const files = fs.readdirSync(absoluteDirectory);
	for (const file of files) {
		let absolutePathAndFileName = `${absoluteDirectory}\\${file}`;
		if (!qstr.endsWith(absolutePathAndFileName, '\\node_modules') && !qstr.contains(absolutePathAndFileName, '\\.git') && !qstr.contains(absolutePathAndFileName, '\\.vscode')) {
			absolutePathAndFileName = qstr.replaceAll(absolutePathAndFileName, '\\\\', '\\');
			if (fs.statSync(absolutePathAndFileName).isDirectory()) {
				qfil.getSitePathAndFileNames(absolutePathAndFileName, pathAndFileNames);
			} else {
				const fixedPathAndFileName = qsys.convertAbsoluteWindowsPathAndFileNameToPathAndFileName(absolutePathAndFileName);
				pathAndFileNames.push(fixedPathAndFileName);
			}
		}
	}
	return pathAndFileNames;
}

export const convertBackSlashesToForwardSlashes = (pathAndFileName: string) => qstr.replaceAll(pathAndFileName, '\\', '/');
