import { defineConfig } from 'vite'
import { exec } from 'node:child_process';
// https://vitejs.dev/config/

export default defineConfig({
  base: "",
  publicDir: "public",
  plugins: [
    {

      name: 'run-script-on-change',
      handleHotUpdate({ file }) {
        // console.log(`File changed: ${file}`);


        // Add your script execution logic here
        exec(`node src/scripts/run-on-file-change.js "${file}" arg1 arg2`  , (err, _stdout, stderr) => {
          if (err) {
            console.error(`Error executing script: ${err}`);
            return;
          }
          if (stderr) {
            console.error(`Script error output: ${stderr}`);
          }
          console.log(
              _stdout
          )
        });
      }
    }
  ]
})
