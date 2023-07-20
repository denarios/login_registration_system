import {exec} from 'child_process';
import fs from 'fs'
import path from 'path';
import {fileURLToPath} from 'url';

const __executeCpp = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__executeCpp);
import {stderr,stdout} from 'process'
import {v4 as  uuid} from 'uuid';
const outputPath =path.join(__dirname,'output');
console.log(outputPath);
if(!fs.existsSync(outputPath)){
    fs.mkdirSync(outputPath ,{recursive:true});
}
const executeCpp=(filePath)=>{
  const jobId=path.basename(filePath).split(".")[0];
  const outPath=path.join(outputPath,`${jobId}.exe`);
  return new Promise((resolve,reject)=>{
    exec(
    `g++ ${filePath} -o ${outPath} && cd ${outputPath} && .\\${jobId}.exe `,
     (error,stdout,stderr) =>{
       if(error){
        reject({error,stderr});
       }
       if(stderr){
        reject(stderr);
       }
       resolve(stdout);
       });    
  });
}
export default executeCpp;

