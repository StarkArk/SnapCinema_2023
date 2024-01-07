function releases(year) {


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

                   

                    console.log(monthlyData)
                    let dataVariable = monthlyData.filter((sample) => sample.Year === parseInt(year));
                    let nonHoliday = dataVariable.map(entry => entry.netReleases);
                    const sumNonholiday = nonHoliday.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

                    let holiday = dataVariable.map(entry => entry.holidayReleases);
                    const sumHoliday = holiday.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

                    var data = [{
                        values: [sumNonholiday, sumHoliday],
                        labels: ['Non Holiday', 'Holiday'],
                        type: 'pie',
                        marker: {
                            colors: ['#D1D0EA', '#6A5ACD']
                        }
                    }];

                    var layout = {
                        
                        legend: { title: '' },
                        title: `Non-Holiday vs Holiday Releases in ${year}`,
                        height: 500,
                        width: 600,
                        // 
                        domain: {
                            x: [0.6, 0.9]
                        }
                    };

                    Plotly.newPlot('myPieReleases', data, layout);

                    
                }
            });
        })
        .catch(error => console.error('Error fetching the CSV file:', error));
}

releases(2019);

function optionChange(year) {
    releases(year);
    stackedBar(year);
    overlapHist(year);
    console.log(year);
}