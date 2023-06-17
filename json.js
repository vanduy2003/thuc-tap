var postApi = 'https://docs.google.com/spreadsheets/d/1rCoaE4pJ_YqwIxreaiorsXZ-vHpnXIc4ZuTFPQLIM-s/edit#gid=1243951575'
fetch(postApi)
    .then(function(reponse) {
        return reponse.json();
    })
    .then(function(posts) {
        console.log(posts);
    });