function releases(year) {





    fetch('js/master_merged_df.csv')
        .then(response => response.text())
        .then(csvData => {
            // Parse the CSV data using PapaParse
            Papa.parse(csvData, {
                header: true,
                dynamicTyping: true,
                complete: function (papaResults) {
                    // papaResults.data contains the parsed data as an array of objects
                    const monthlyData = papaResults.data;

                    // monthlyData.filter() 

                    console.log(monthlyData)

                    var data = [{
                        values: [60, 40],
                        labels: ['Non Holiday', 'Holiday'],
                        type: 'pie',
                        marker: {
                            colors: ['#596BC2', '#BED1E9']
                        }
                    }];

                    var layout = {
                        height: 500,
                        width: 600,
                        // 
                        domain: {
                            x: [0.6, 0.9]
                        }
                    };

                    Plotly.newPlot('myPieReleases', data, layout);

                    // // Create a stacked bar chart using Plotly
                    // const trace1 = {
                    //   x: worldwideData.slice(0, 20).map(entry => entry.Rank),
                    //   y: worldwideData.slice(0, 20).map(entry => entry.Foreign),
                    //   type: 'bar',
                    //   name: 'Foreign',
                    //   hovertext: worldwideData.slice(0, 20).map(entry => entry['Release Group']),
                    //   marker: { color: '#596BC2' }
                    // };

                    // const trace2 = {
                    //   x: worldwideData.slice(0, 20).map(entry => entry.Rank),
                    //   y: worldwideData.slice(0, 20).map(entry => entry.Domestic),
                    //   type: 'bar',
                    //   name: 'Domestic',
                    //   hovertext: worldwideData.slice(0, 20).map(entry => entry['Release Group']),
                    //   marker: { color: '#BED1E9' }
                    // };

                    // const data = [trace1, trace2, trace3];
                    // // const data = [trace1, trace2];

                    // const layout = {
                    //   xaxis: { title: 'Months' },
                    //   yaxis: { title: 'Dollars' },
                    //   legend: { title: '' },
                    //   title: 'Gross Movie Revenue 2023 vs Previous Years',
                    //   // hovermode: 'closest',
                    //   // template: 'plotly_white',
                    //   barmode: 'stack' // Stacked bar chart
                    // };

                    // Render the chart
                    // Plotly.newPlot('myPieReleases', data, layout);
                }
            });
        })
        .catch(error => console.error('Error fetching the CSV file:', error));
}
function optionChange(x) {
    releases(x);
    stackedBar(x);
    overlapHist(x);
    console.log(x);
}
releases(2019);