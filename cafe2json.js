var fs = require('fs'),
    path = require('path'),
    XLSX = require('xlsx'),
    wrench = require('wrench'),
    yamlFront = require('front-matter'),
    removeMd = require('remove-markdown');

var workbook = XLSX.readFile('cafe/cafe.xlsx');

var sheets = [
    {
        name:'System Interfaces',
        heading_row: 3,
        data_starts: 4,
        output: 'cafe/si.json',
        cols: {
            "A": {
                heading: "Category"
            },
            "B": {
                heading: "Interface"
            },
            "C": {
                heading: "Id"
            },
            "M": {
                heading: "Version"
            }

        }

    },
    {
        name:'Configurable Items',
        heading_row: 12,
        data_starts: 16,
        output: 'cafe/ci.json',
        cols: {
            "A": {
                heading: "Category"
            },
            "B": {
                heading: "Interface"
            },
            "C": {
                heading: "Id"
            },
            "G": {
                heading: "MX"
            },
            "P": {
                heading: "Csp"
            },
            "Q": {
                heading: "SI"
            }
        }
    }

]

var sheet_name_list = workbook.SheetNames;
sheets.forEach(function(sheet){
    var worksheet = workbook.Sheets[sheet.name];
    var headers = {};
    var data = [];
    console.log("Opening Sheet: " + sheet.name)
    for(z in worksheet) {
        if(z[0] === '!') continue;

        //parse out the column, row, and value
        var col = z.substring(0,1);
        var row = parseInt(z.substring(1));
        var value = worksheet[z].v.toString();
        if(row <sheet.heading_row) continue
        //store header names
        if(row == sheet.heading_row) {
            if(sheet.cols[col]){
                headers[sheet.cols[col].heading] = sheet.cols[col].heading;
            

            }
            continue;
        }

        if(row >= sheet.data_starts){
            if(!data[row]) data[row]={};
            if(sheet.cols[col]){
                data[row].row = row;
                data[row][headers[sheet.cols[col].heading]] = value.replace(/[\r\n]+/g," ").replace(/CAFÉ\./g,"");
            

            }

        }
    }
    //drop rows before data starts
    for (var i = 1; i <= sheet.data_starts; i++) {
        data.shift();
    };
    var json_file = sheet.output;
    console.log("Opening: " + json_file);
    fs.open(json_file, 'w', function(err, fd) {
        if (err) {
           console.error(err);
        }
        else{
            console.log("Saved:" + json_file);     
            fs.writeFile(json_file, JSON.stringify(data), function(err) {
                if(err) {
                    console.error("Could not write file" + json_file + ": %s", err);
                }
            });      

        }
    });        
})


