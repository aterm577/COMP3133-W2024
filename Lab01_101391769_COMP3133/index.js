console.log ('Week02 - Lab 01: FS and Streams')

const fs = require('fs')
const csv = require('csv-parser')

const canadaData = []
const usaData = []

// a. Delete canada.txt and usa.txt if already exist using fs module 
const deleteFileIfExists = (filePath) => {
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath)
        console.log(`The existing file ${filePath} was deleted`)
    }
}
deleteFileIfExists('canada.txt')
deleteFileIfExists('usa.txt')

// b. Filter data of Canada and USA
const filterData = (row) => {
    if (row.country === 'Canada') {
      canadaData.push(row)
    } else if (row.country === 'United States') {
      usaData.push(row)
    }
}

// c. Write a filtered data of Canada and USA to the canada.txt and usa.txt
const writeToFile = async (filePath, data) => {
    const header = 'country,year,population\n'
    fs.writeFileSync(filePath, header)
    data.forEach(async (row) => {
        fs.appendFileSync(filePath, `${row.country},${row.year},${row.population}\n`)
    })
    console.log(`Data written to ${filePath}: \n${header.trim()}${data.map(row => 
        `\n${row.country},${row.year},${row.population}`).join('')}`)
}

// Read the CSV file, filter data, and write to output files
fs.createReadStream('input_countries.csv')
  .pipe(csv())
  .on('data', (row) =>{
    filterData(row)
  })
  .on('end', () => {
    writeToFile('canada.txt', canadaData)
    writeToFile('usa.txt', usaData)

    console.log('CSV file successfully processed')
  })
