function overlapHist(year) {


    fetch('js/master_merged_df_renamed.csv')
        .then(response => response.text())
        .then(csvData => {
            // Parse the CSV data using PapaParse
            Papa.parse(csvData, {
                header: true,
                dynamicTyping: true,
                complete: function (papaResults) {
                    // papaResults.data contains the parsed data as an array of objects
                    const monthlyData = papaResults.data;
                    let dataVariable = monthlyData.filter((sample) => sample.Year === parseInt(year));


                    // .filter(year) goes here 

                    console.log(monthlyData)

                    var x1 = dataVariable.map(entry => entry.netReleases)
                    var x2 = dataVariable.map(entry => entry.holidayReleases)

                    var trace1 = {
                        x: x1,
                        type: "histogram",
                        name: `${year} Non-Holiday Releases`,
                        nbinsx: 30,
                        bargap: 0.2,
                        opacity: 0.5,
                        marker: {
                            color: '#D1D0EA',
                        },
                    };
                    var trace2 = {
                        x: x2,
                        type: "histogram",
                        name: `${year} Holiday Releases`,
                        nbinsx: 30,
                        bargap: 0.2,
                        opacity: 0.6,
                        marker: {
                            color: '#6A5ACD',
                        },
                    };

                    var data = [trace1, trace2];
                    var layout = { 
                        xaxis: { title: '# of Releases' },
                        yaxis: { title: 'Frequency' },
                        legend: { title: '' },
                        title: `Monthly Release Totals in ${year}`,
                        barmode: "overlay" };

                    Plotly.newPlot("myHistReleases", data, layout);

                }
            });
        })
        .catch(error => console.error('Error fetching the CSV file:', error));
}
overlapHist(2019);