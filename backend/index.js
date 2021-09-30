const express = require("express")();

express.use("/", (req, res) => {
    
});

express.listen(40, () =>{
    console.log("Currently listening on port 40");
})