const outerTable = document.querySelector('#OuterTable');
const searchBox = document.querySelector('#term');
console.log(searchBox.value);


console.log(outerTable);
console.log(searchBox);


searchBox.addEventListener('keydown', (ev) => {
    let term = ev.target.value;

    console.log(term);
    if (term != null && term != undefined) {
        console.log("inside if");
       fetch(`https://acme-users-api-rev.herokuapp.com/api/users/search/${term}`)
            .then(response => response.json())
            .then(data => {
                console.log("data ", data)
                data.users.forEach(element => {
                    outerTable.append(createUserRow(element))
                });           
                }
            )}
 } )




function createUserRow(user) {
    // console.log(user);
    const row = document.createElement('tr')
    const firstName = document.createElement('td')
    firstName.classList.add('firstname');
    firstName.innerText = `${user.firstName}`;
    row.append(firstName);
    const lastName = document.createElement('td')
    lastName.classList.add('lastname');

    lastName.innerText = `${user.lastName}`;
    row.append(lastName);

    const email = document.createElement('td')
    email.classList.add('email');
    email.innerText = `${user.email}`;
    row.append(email);
    const title = document.createElement('td')
    email.classList.add('title');
    title.innerText = `${user.title}`;
    row.append(title);
    // console.log(row);
    return row;

}