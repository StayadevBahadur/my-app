const fs = require('node:fs');


//http://localhost:3000/api/getblog?slug=how-to-learn-java
export default function handler(req, res) {
        
  fs.readFile(`blogdata/${req.query.slug}.json`, 'utf8', (err, data) => {
  
    if (err) {
      console.error(err);
      console.log("Internal server error")
      return;
    }
    console.log(data);
    res.status(200).json(JSON.parse(data)) 
  });
  
}
