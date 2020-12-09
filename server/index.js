const express = require('express');
const app = express();
const multer = require('multer');
let upload = multer({ dest: './public/uploads' });
const PORT = 4050

app.post('/upload-profile-pic', upload.single('profile_pic'), function (req, res, next) {
    res.send("image uploaded")

})




app.listen(PORT, ()=>{console.log("this server listen to " + PORT)})

