import express from 'express'
import  generateFile from '../generateFile.js';
import  executeCpp  from '../executeCpp.js';
const coderunRoute=express.Router();
coderunRoute.post("/run", async (req, res) => {
    // console.log(req.body);
    // const language=req.body.language;
    // const code =req.body.code;
    const { language = 'cpp', code } = req.body;
    if (code === undefined) {
        
    }
    try {
        const filePath = await generateFile(language, code);
        const output = await executeCpp(filePath);
        // console.log(filePath);
        res.json({ filePath, output });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
});
export default coderunRoute;