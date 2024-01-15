import express, {Router} from 'express';
import {promises as fs} from 'fs';
import path from "path";


const router: Router = express.Router();
const messagesWay: string = './messages';

router.post('/', async (req, res) => {
  try {
    const message: string = req.body.message;
    const datetime: string = new Date().toISOString();
    const fileName: string = `${datetime}.txt`;
    const filePath: string = path.join(messagesWay, fileName);

    await fs.writeFile(filePath, JSON.stringify({message, datetime}));

    res.json({ message, datetime });
  } catch (error) {
    console.error(error);
  }
});



export default router;
