const fs = require('fs');
const sharp = require('sharp');

module.exports = function resize(path, format, width, height, output_size) {
    const readStream = fs.createReadStream(path);
    let transform = sharp();

    if (format) {
        transform = transform.toFormat(format);
    }

if (width || height) {
    transform = transform.resize(width, height)
                         .max()
                         .background({r: 0, g: 0, b: 0, alpha: 0})
                         .embed()
                         .jpeg({quality:50})
}

    return readStream.pipe(transform);
};


//function filesize(){
//    let stats = fs.statSync("output.txt");
//    let fileSizeInKiloBytes = stats.size / 1000.0;

//    return fileSizeInKiloBytes;
//}
