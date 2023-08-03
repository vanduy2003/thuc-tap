import axios from 'axios';

function Submit(e){
e.preventDefault();
const spreadsheetId = '1tC1GiRvnlNvsubH-Py2SAWbps89ylOAEFfTRV-2MCQc';
const range = 'googleSheetRegister!A1:Z1000';
const apiKey = '113873730622747878726';

const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;


const username = document.getElementById('username').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const data = {
    username : username,
    email : email,
    password : password
}

axios.post(url, data)
.then(response => {
    console.log('Success:', response);
})
.catch(error => {
    console.error('Error:', error);
});
}

