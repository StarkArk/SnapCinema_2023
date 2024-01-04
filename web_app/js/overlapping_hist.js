function overlapHist(year) {




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

                    // .filter(year) goes here 

                    console.log(monthlyData)

                    var x1 = [8, 10, 12, 28, 36, 45, 68, 77, 115]
                    var x2 = [11, 13, 25, 49, 53, 62, 62, 85, 145, 155]

                    var trace1 = {
                        x: x1,
                        type: "histogram",
                        nbinsx: 30,
                        bargap: 0.2,
                        opacity: 0.5,
                        marker: {
                            color: '#BED1E9',
                        },
                    };
                    var trace2 = {
                        x: x2,
                        type: "histogram",
                        nbinsx: 30,
                        bargap: 0.2,
                        opacity: 0.6,
                        marker: {
                            color: '#596BC2',
                        },
                    };

                    var data = [trace1, trace2];
                    var layout = { barmode: "overlay" };
                    Plotly.newPlot("myHistReleases", data, layout);

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

                    // // Render the chart
                    // Plotly.newPlot('myBar', data, layout);
                }
            });
        })
        .catch(error => console.error('Error fetching the CSV file:', error));
}
overlapHist(2019);