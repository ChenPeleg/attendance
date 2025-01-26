import {appendFile, promises} from 'node:fs';


async function addStringToFile() {
    const filePath = 'src/imports/imported-components.ts';
    const content = '//abc 123';


    try {
        await appendFile(filePath, content, () => {
            console.log('File appended');
        });
        console.log(`Successfully added '${content}' to ${filePath}`);
    } catch (error) {
        console.error(`Error adding '${content}' to ${filePath}:`, error);
    }


}

const getFileContent = async (filePath) => {
    try {
        const data = await promises.readFile(filePath, () => {
            console.log('File read');
        });

        return data.toString('utf8');
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
    }
};

const runOnFileChange = async () => {

    const fileChanged = process.argv[2];
    const result = await getFileContent(fileChanged);
    if (result.includes('@customElement')) {
        const relativePath = fileChanged.split('src/')[1];

        console.log(relativePath);
    }

};
runOnFileChange().then();

