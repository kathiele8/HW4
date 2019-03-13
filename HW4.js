var request = new XMLHttpRequest();
const outputDiv = document.getElementById('output')
const ul=document.createElement('ul')
const ul1=document.createElement('ul')

var h2=document.createElement('h2')
h2.innerHTML= 'User emails from XMLHttpRequest:';
outputDiv.appendChild(h2)

var h2=document.createElement('h2')
h2.innerHTML= 'User usernames from fetch:';
outputDiv.appendChild(h2)
var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/users');

request.onload = function (e) {
    if (request.status = 200) {
        var data = JSON.parse(this.response);
        process(data)
    }
};

request.send()

function process(data) {
    let emails = []
    data.forEach(function(user) {
        emails.push(user.email)
    })
emails.sort()
emails.forEach( email =>{
    let li = createNode('li');
    li.innerHTML = email;
    append (ul1, li);

})

}
outputDiv.appendChild(ul1)

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then(function (data){
    let users = data 
    let usernames = []
    users.forEach(function(user) {
        usernames.push(user.username)
    }
    )
    function sortNames (n1, n2) {
        const len1 = n1.length
        const len2 = n2.length
        return len1-len2
    }

    usernames.sort(sortNames)
    usernames.forEach(username => {
        let li = createNode('li')
        li.innerHTML = username
        append (ul,li);
        return ul;
    })
})

function createNode(element) {
    return document.createElement(element);
}

function append(parent,el) {
    return parent.appendChild(el);
}


outputDiv.appendChild(ul)

