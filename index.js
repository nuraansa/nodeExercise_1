const {writeFile, readFile, appendFile} = require('fs')

// First content:
// const content = "Hello I'm Nuraan";

const content = "Hello I'm no one";

writeFile('./data.txt', content, err=> {
    try {
        (!err) 
        console.log(content)
    }
    catch {
        console.log("An error occured");
    }
    
});
// The content was overwritting by the second content I added on the same line.
const content2 = " - This is new inserted data"

appendFile('./data.txt', content2, err => {
    try {
        (!err)
        console.log('Data was Appended!');
    }
    catch {
        console.log('An error occured');
    }
});
readFile('./data.txt', 'utf-8', (err, content)=>{
    try {
        (!err) 
        console.log(content);
    }
    catch {
        console.log('An error occured');
    }
})