// code away!
require('dotenv').config(); 
const server = require("./server.js");

// server.listen(7000, () => {
//     console.log("server running on http://localhost:7000")
// });



const port = process.env.PORT;

server.listen(port, () => {
    console.log("server running on http://localhost:${port}")
});


