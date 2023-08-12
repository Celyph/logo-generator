const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');

const questions = [
    { name: 'shape', message: 'Shape for logo (Circle, Square, Triangle)' },
    { name: 'color', message: 'Color for logo' },
    { name: 'text', message: 'Text for Logo' }
];

inquirer
    .prompt(questions)
    .then((answers) => {
        let shp;
        if (answers['shape'].toLowerCase() === 'circle') {
            shp = new shapes.Circle(answers['color'], answers['text']);
        } else if (answers['shape'].toLowerCase() === 'square') {
            shp = new shapes.Square(answers['color'], answers['text']);
        } else if (answers['shape'].toLowerCase() === 'triangle') {
            shp = new shapes.Triangle(answers['color'], answers['text'])
        } else {
            console.log(`invalid shape '${answers['shape']}'`)
            process.exit(1);
        }

        fs.writeFileSync('logo.svg', shp.render());
    })
    .catch((error) => {
        console.log(error);
    })