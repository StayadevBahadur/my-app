const fs = require('node:fs');

export default async function handler(req, res) {
  try {
    const files = await fs.promises.readdir("blogdata");
    console.log('Files in directory:', files);
    const allBlogs = [];
    for (const filename of files) {
      const data = await fs.promises.readFile(`blogdata/${filename}`, 'utf8');
      allBlogs.push(JSON.parse(data));
    }

    res.send(allBlogs);
  } catch (err) {
    console.error('Error reading directory or files:', err);
    res.status(500).send('Internal Server Error');
  }
  
}








