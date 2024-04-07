# belly-button-challenge
(Note) In order to do this homework on belly-button-challenge, I have used the activities in class of week 14 (particular activities listed in the comment lines) and sometimes get assistance from ChatGPT for debugging purposes.



**Background**

In this assignment, we are reuired to build an interactive dashboard to explore the provided Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.

**Instructions**

I have completed the following steps:

[1] Used the D3 library to read in samples.json from the URL "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json."

[2] Created a horizontal **bar chart** with a dropdown menu to display the top 10 OTUs found in that individual.

  - Used "sample_values" as the values for the bar chart.

  - Used "otu_ids" as the labels for the bar chart.

  - Used "otu_labels" as the hovertext/tooltip for the chart.

<img width="481" alt="barchart" src="https://github.com/hatkiet/belly-button-challenge/assets/154276115/f0655eea-04d1-415c-aaf0-730149a05c25">

[3] Created a **bubble chart** that displays each sample.

  - Used "otu_ids" for the x values.

  - Used "sample_values" for the y values.

  - Used "sample_values" for the marker size.

  - Used "otu_ids" for the marker colors.

  - Used "otu_labels" for the text values.

<img width="1231" alt="bubblechart" src="https://github.com/hatkiet/belly-button-challenge/assets/154276115/0fd119fe-9e04-4502-8bfe-789c3dd461d3">

[4] Displayed the sample metadata, i.e., an individual's demographic information.

[5] Display each key-value pair from the metadata JSON object somewhere on the page.

<img width="226" alt="dropdownmenu" src="https://github.com/hatkiet/belly-button-challenge/assets/154276115/6497d37f-cabe-4d24-8ad6-82b36f614b07">

[6] Updated all the plots when a new sample is selected.

When sample ID "940" is selected
<img width="1355" alt="sample_940" src="https://github.com/hatkiet/belly-button-challenge/assets/154276115/f6729613-383f-4068-a53c-e87ae6fe6101">

When sample ID "1273" is selected
<img width="1251" alt="sample_1273" src="https://github.com/hatkiet/belly-button-challenge/assets/154276115/b39d03e3-609d-453e-b3ea-8faeeee182c0">

[7] Deployed the app to a free static page hosting service, such as GitHub Pages. Submited the links to our deployment and our GitHub repo. 
