//import { getSitePathAndFileNames, copyFileForceDirectories } from '../qtools/qfil';
import * as qfil from '../qtools/qfil';
import * as qstr from '../qtools/qstr';
//import { isEmpty } from '../qtools/qstr';

class SiteGenerator {

	relativeDestinationDirectory: string;

	constructor(relativeDestinationDirectory = '') {
		this.relativeDestinationDirectory = relativeDestinationDirectory;
	}

	createSite() {
		if (!qstr.isEmpty(this.relativeDestinationDirectory)) {
			const sourceFiles = qfil.getSitePathAndFileNames();

			sourceFiles.forEach((sourceFile) => {
				const targetFile: string = `${this.relativeDestinationDirectory}/${sourceFile}`;
				qfil.copyFileForceDirectories(sourceFile, targetFile);
			});
		}
	}
}

export default SiteGenerator;
