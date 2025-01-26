import {appendFile} from 'node:fs';


async function addStringToFile() {
    const filePath = 'src/imports/imported-components.ts';
    const content = 'abc 123';



    try {
        await appendFile(filePath, content, ()=> {
            console.log('File appended');
        });
        console.log(`Successfully added '${content}' to ${filePath}`);
    } catch (error) {
        console.error(`Error adding '${content}' to ${filePath}:`, error);
    }

}

const runOnFileChange =   ( ) => {
   console.log('File changed: src/script/run-on-file-changes.ts');
    addStringToFile();
   //imported-components.ts

}
 runOnFileChange()




 export default {runOnFileChange}
