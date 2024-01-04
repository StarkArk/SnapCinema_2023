function stackedBar(year) {




  // Fetch the CSV file
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
          
          // .filter() goes here
          
          
          
          
          
          console.log(monthlyData)

          const trace1 = {
            x: [1, 2, 3, 4, 5, 6],
            y: [2, 3, 2, 4, 2, 5],
            type: 'bar',
            marker: { color: '#BED1E9' },
            opacity: .7
          }

          const trace2 = {
            x: [1, 2, 3, 4, 5, 6],
            y: [2, 3, 2, 4, 2, 5],
            type: 'bar',
            marker: { color: '#596BC2' },
            opacity: .7
          }

          var trace3 = {
            x: [1, 2, 3, 4, 5, 6],
            y: [4, 6, 5, 8, 7, 10],
            mode: 'lines',
            name: 'seagreen',
            opacity: 0.8,
            line: {
              // color: 'rgb(245, 179, 66)',
              width: 6,
              opacity: .1
            },
            name: "Opacity 0.5"
            // marker: { color: '#596BC2' }
          };

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

          const data = [trace1, trace2, trace3];
          // const data = [trace1, trace2];

          const layout = {
            xaxis: { title: 'Months' },
            yaxis: { title: 'Dollars' },
            legend: { title: '' },
            title: 'Gross Movie Revenue 2023 vs Previous Years',
            // hovermode: 'closest',
            // template: 'plotly_white',
            barmode: 'stack' // Stacked bar chart
          };

          // Render the chart
          Plotly.newPlot('myBar', data, layout);
        }
      });
    })
    .catch(error => console.error('Error fetching the CSV file:', error));
}
stackedBar(2019);