function clickMe() {
  var tableBody = document.querySelector('#myTableBody');
  let data;
  axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
    if (response.status === 200) {
      data = response.data;
    } else {
      document.getElementById('input').innerHTML(response.error);
    }
    data.forEach(function (user) {
      var row = document.createElement('div');
      row.className = 'row';
      row.innerHTML =
        '<div class="cell">' +
        user.id +
        '</div><div class="cell">' +
        user.title +
        '</div><div class="cell">' +
        user.body +
        '</div>';
      tableBody.appendChild(row);
    });
  });
}

function addPost() {
  var tableBody = document.querySelector('#myTableBody');
  axios
    .put('https://jsonplaceholder.typicode.com/posts', {
      id: 111,
      title: 'test',
      body: 'test body',
    })
    .then((response) => {
      if (response.status === 201) {
        data = response.data;
        var row = document.createElement('div');
        row.className = 'row';
        row.innerHTML =
          '<div class="cell">' +
          data.id +
          '</div><div class="cell">' +
          data.title +
          '</div><div class="cell">' +
          data.body +
          '</div>';
        tableBody.appendChild(row);
      } else {
        console.log('====================================');
        console.log('Them moi khong thanh cong');
        console.log('====================================');
      }
    });
}
