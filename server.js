const express = require('express');
const fileUpload = require('express-fileupload');
const connectDB = require('./config/db');

const app = express();

connectDB();


app.use(fileUpload());

app.use(express.json({extended: false}));

app.get('/', (req, res) => {
    res.json({ msg: "Welcome To My Blog API!" });
});

app.use('/api/users', require('./routes/users'));
app.use('/api/blogs', require('./routes/blog'));
app.use('/api/auth', require('./routes/auth'));

// app.post('/api/upload', (req, res) => {
//     console.log('It is happening Again');
//     if(req.files === null) {
//         return res.status(400).json({ msg: 'No file Uploaded!'});
//     }

//     var file = req.files.file;

//     file.name = file.mimetype === 'image/png' ? Math.random()+'.png' : Math.random()+'.jpg' ;
    
//     console.log(file.mimetype)
//     file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
//         if(err) {
//             console.error(err);
//             return res.status(500).send(err);
//         }

//         res.json({ fileName: file.name, filePath: `/uploads/${file.name}`})
//     })
// })

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on Port Number: ${PORT}`));