// starter file from TA - Erin Wills
// provided comments for basic version of HW
// included function names and filteredData variable

// get table references where table will be inserted
let tbody = d3.select("tbody");
// From data.js
var tableData = data;

// Function Build Table
function buildTable(data){
    // Start By Clearing Existing Data
    tbody.html("");
    // Loop Through data 
    data.forEach((dataRow) => {
        // Append Table Row to Table Body 
        let row = tbody.append("tr");
        
        Object.values(dataRow).forEach((val) => {
            // Append a Cell to the Row for Each Value
            let cell = row.append("td");
            cell.text(val);
        });
    })
}
// Event that Triggers a Function When the Button is Clicked
function handleClick(){
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check if a Date was Entered & Filter Data Using that Date;
    if(date) {
        // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
        filteredData = filteredData.filter((row) => row.datetime === date);
    }
    // Build Table with Filtered Data
    buildTable(filteredData);
}
// `on` Function to attach an Event to the Handler Function
d3.selectAll("#filter-btn").on("click", handleClick);
// Build Table with data.js 
buildTable(tableData);
