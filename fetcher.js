const args = process.argv.slice(2);
const fs = require('fs');
//const http = require('https'); // or 'https' for https:// URLs
const url =  args[0];
const localPath = args[1];
//arg 0 = http://www.example.edu/ ./Users/jeffrey/lighthouse/page-fetcher/test
//arg 1 = /Users/jeffrey/lighthouse/page-fetcher/test

  
const request = require('request');

request(url, (error, response, body) => {

  fs.writeFile(localPath, body, err => {
    if (err) {
      console.error(err);
    } else {
      fs.stat(localPath, (err, stats) => {
        if (err) {
          console.log(`File doesn't exist.`);
        } else {

          console.log(`Downloaded and saved ${stats.size} bytes to ./index.html`);
        }
      });

    }
    // file written successfully
  });




});




// const content = 'Some content!';

// fs.writeFile('/Users/joe/test.txt', content, err => {
//   if (err) {
//     console.error(err);
//   }
//   // file written successfully
// });



// const fs = require('fs');

// // Read file stats
// fs.stat('file.txt', (err, stats) => {
//     if (err) {
//         console.log(`File doesn't exist.`);
//     } else {
//         console.log(stats);
//     }
// });



