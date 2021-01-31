// You can reproduce this figure in plotly.js with the following code!

// Learn more about plotly.js here: https://plotly.com/javascript/getting-started

/* Here's an example minimal HTML template
 *
 * <!DOCTYPE html>
 *   <head>
 *     <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
 *   </head>
 *   <body>
 *   <!-- Plotly chart will be drawn inside this div -->
 *   <div id="plotly-div"></div>
 *     <script>
 *     // JAVASCRIPT CODE GOES HERE
 *     </script>
 *   </body>
 * </html>
 */

trace1 = {
  mode: 'markers', 
  name: 'first legend group', 
  x: [1, 2, 3], 
  y: [2, 1, 3], 
  marker: {color: 'rgb(164, 194, 244)'}, 
  legendgroup: 'group'
};
trace2 = {
  line: {color: 'rgb(164, 194, 244)'}, 
  mode: 'lines', 
  name: 'first legend group - average', 
  x: [1, 2, 3], 
  y: [2, 2, 2], 
  showlegend: false, 
  legendgroup: 'group'
};
trace3 = {
  mode: 'markers', 
  name: 'second legend group', 
  x: [1, 2, 3], 
  y: [4, 9, 2], 
  marker: {color: 'rgb(142, 124, 195)'}, 
  legendgroup: 'group2'
};
trace4 = {
  line: {color: 'rgb(142, 124, 195)'}, 
  mode: 'lines', 
  name: 'second legend group - average', 
  x: [1, 2, 3], 
  y: [5, 5, 5], 
  showlegend: false, 
  legendgroup: 'group2'
};
data = [trace1, trace2, trace3, trace4];
Plotly.plot('plotly-div', {
  data: data
});