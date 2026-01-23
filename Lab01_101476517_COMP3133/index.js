const fs = require('fs');
const csv = require('csv-parser');

const inputFile = 'input_countries.csv';
const canadaFile = 'canada.txt';
const usaFile = 'usa.txt';

// Delete output files if they already exist
if (fs.existsSync(canadaFile)) {fs.unlinkSync(canadaFile);}

if (fs.existsSync(usaFile)) {fs.unlinkSync(usaFile);}

// Write headers to output files
fs.writeFileSync(canadaFile, 'country,year,population\n');
fs.writeFileSync(usaFile, 'country,year,population\n');

// Read CSV and filter data
fs.createReadStream(inputFile).pipe(csv()).on('data', (row) => {
    const country = row.country.toLowerCase();

    if (country === 'canada') {
        fs.appendFileSync(canadaFile,`${row.country},${row.year},${row.population}\n`);
    }

    if (country === 'united states' || country === 'usa') {
        fs.appendFileSync(usaFile,`${row.country},${row.year},${row.population}\n`);
    }
}).on('end', () => {
    console.log('CSV file successfully processed.');
});
