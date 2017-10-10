const cadastrar = () => {
    let user = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    }
    console.log(user);

    let url = 'http://localhost:5000/post';
    let req = new XMLHttpRequest();

    req.open('POST', url, true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onreadystatechange = function() {//Call a function when the state changes.
        if(req.readyState == 4 && req.status == 200) {
            alert(req.responseText);
        }
    }

    req.send(JSON.stringify(user));
    console.log(JSON.stringify(user));

};