const express = require('express');
const resize = require('./resize');

const server = express();

server.get('/resize/:width/:height/:size', (req, res) => {
    // Extract the query-parameter
    var widthString = req.params.width;
    var heightString = req.params.height;
    var format = req.params.format;
    var size = req.params.size;
    // Parse to integer if possible
    let width, height;
    if (widthString) {
        width = parseInt(widthString);
    }
    if (heightString) {
        height = parseInt(heightString);
    }
    // Set the content-type of the response
    res.type(`image/${format || 'png'}`);

    // Get the resized image
    resize('file.jpg', format, width, height, size).pipe(res);
});

server.listen(7881, () => {
    console.log('Server started!');
});
