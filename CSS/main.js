
const apiKey = 'YOUR_API_KEY_HERE';
const spreadsheetId = 'YOUR_SPREADSHEET_ID_HERE';


const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1?key=${apiKey}`;


fetch(url)
    .then(response => response.json())
    .then(data => {
        const output = document.getElementById('data');
        const rows = data.values;

        
        let html = '<table border="1">';
        rows.forEach(row => {
            html += '<tr>';
            row.forEach(cell => {
                html += `<td>${cell}</td>`;
            });
            html += '</tr>';
        });
        html += '</table>';

        output.innerHTML = html;
    })
    .catch(error => console.error('Error fetching data:', error));
 