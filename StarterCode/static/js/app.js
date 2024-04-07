// Use the D3 library to read in samples.json 
// from the URL https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json.
// Refs: Module 14/Day 3/Activity-01 (Mod14/3/Act-01)

const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json"

// Fetch the JSON data and console log it
d3.json(url).then(data => {
          console.log(data);
});

/*****************************************
 *  Start with the initialize function   *
*****************************************/

// Initialize init() function
function init(){

    // Create a dropdown menu to select sample dataset with D3
    let dropdownMenu = d3.select("#selDataset");

    // Use D3 to get the data of sample names (or IDs) and populate the dropdown menu
    d3.json(url).then(data => {     // Fetch JSON data and then 
        data.names.forEach(id => {  // for each ID, execute the following
            // create a new option to the menu, display 'id' as text within the option, 
            // then set the value attribute to unique id associate with option. 
            // Refs: Mod14/3/Act-03 & 10
            dropdownMenu.append("option").text(id).property("value", id);
        });
        // Set variable for the default sample (first sample) from the list
        let default_sample = data.names[0];

        // Call the functions
        barChart(default_sample);       // Plot top 10 OTUs
        bubbleChart(default_sample);    // Plot number of bacteria per sample
        metaData(default_sample);       // Display meta data of the sample
    });
};

/*****************************************
 *   Function which build the bar chart  *
*****************************************/

function barChart(sample){
    // Use D3 to get the data for a particular sample
    d3.json(url).then(data => {
        // Retrieve the data sample
        let filtered_data = data.samples.filter(item => item.id == sample);

        // Get the first index of the array of the samples
        let choosen_sample = filtered_data[0];

        // Get the Top 10 OTUs. Refs: Mod14/2/Act-2,7,8
        let top_10_otu_ids = choosen_sample.otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse();
        let top_10_sample_values = choosen_sample.sample_values.slice(0,10).reverse();
        let top_10_labels = choosen_sample.otu_labels.slice(0,10).reverse();

        // Set up the trace for the bar chart. Refs: Mod14/2/Act-03
        let trace_bar = {
            x: top_10_sample_values,
            y: top_10_otu_ids,
            text: top_10_labels,
            type: "bar",
            orientation: "h"
        };

        // Set the layout for every overall chart
        let layout = {
            title: "Top 10 Operational Taxonomic Units (OTUs)"
        };

        //Render the plot to the div tag with id "bar"
        Plotly.newPlot("bar", [trace_bar], layout);
    });

};

/*****************************************
 * Function which build the bubble chart *
*****************************************/

function bubbleChart(sample){
    // Use D3 to get the data for a particular sample
    d3.json(url).then(data => {
        // Retrieve the data sample
        let filtered_data = data.samples.filter(item => item.id == sample);

        // Get the first index of the array of the samples
        let choosen_sample = filtered_data[0];

        // Set the trace for the buble chart
        let trace_bubble = {
            x: choosen_sample.otu_ids,
            y: choosen_sample.sample_values,
            text: choosen_sample.otu_labels,
            mode: "markers",
            marker: {
                size: choosen_sample.sample_values,
                //sizeref: 1.1,
                color: choosen_sample.otu_ids,
                colorscale: "Earth" // Refs: https://plotly.com/javascript/colorscales/ 
            }
        };
       
        // Set the layout
        let layout = {
            title: "Bacteria per sample",
            xaxis: {title: "OTU ID"}
        };
        
        //Render the plot to the div tag with id "bubble"
        Plotly.newPlot("bubble", [trace_bubble], layout);
    });
};

/***************************************************
 * Function metaData() which dealing with metadata *
***************************************************/
 
function metaData(sample){
    // Use D3 to get the data for a particular sample
    d3.json(url).then(data => {
        
        // Retrieve all the metadata and then filter the data when id is the same as a particular sample
        let filtered_data = data.metadata.filter(item => item.id == sample);
        
        // Get the first index of the array of the samples
        let choosen_sample = filtered_data[0];

        // Clear previous metadata. Refs: Mod14/3/Act-3 & 5
        d3.select("#sample-metadata").html("");
        
        // Use the Object.keys().map() to add each "key and value" pair to the panel. Refs: Mod14/2/Act-1
        Object.keys(choosen_sample).map(key => {
            d3.select("#sample-metadata").append("h6").text(`${key}: ${choosen_sample[key]}`);
        });
    });
};

/**************************************************
 * Metadata updates when a new sample is selected *
**************************************************/

// Function which updates the dashboard if the information of the sample is changed
function optionChanged(choosen_sample){
    barChart(choosen_sample);
    bubbleChart(choosen_sample);
    metaData(choosen_sample);
};

// Call the initialize function
init();