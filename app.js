const outerTable = document.querySelector('#OuterTable');
const searchBox = document.querySelector('#term');
const clearLink = document.querySelector('#clear');

// console.log(searchBox.value);
// console.log(outerTable);
// console.log(searchBox);


/*searchBox.addEventListener('change', (ev) => {
    let term = ev.target.value;
    outerTable.innerHTML = ''
    ev.preventDefault()
    console.log(term);
    if (term != null && term != undefined && term != "") {
     
        console.log("inside if");
       fetch(`https://acme-users-api-rev.herokuapp.com/api/users/search/${term}`)
            .then(response => response.json())
            .then(data => {
                console.log("data ", data)
                if(data.count !=0){
               outerTable.append(createHeaders())
                }
                data.users.forEach(element => {
                    outerTable.append(createUserRow(element))
                });           
                }
            )}
 } )*/

 searchBox.addEventListener('change',(ev)=>{
    // console.log("input boxchange event ~~~~");
    window.location.hash = searchBox.value
})

window.addEventListener('hashchange',fetchAndRender)
 

function createHeaders() {
    const row = document.createElement('tr')

    const tdAvatar = document.createElement('td')
    const avatarHeader = document.createElement('h3')
    avatarHeader.innerHTML = ''
    tdAvatar.append(avatarHeader)
    row.append(tdAvatar)

    const tdFirstName = document.createElement('td')
    const firstNameHeader = document.createElement('h3')
    firstNameHeader.innerHTML = 'First Name'
    tdFirstName.append(firstNameHeader)
    row.append(tdFirstName)

    const tdLastName = document.createElement('td')
    const lastNameHeader = document.createElement('h3')
    lastNameHeader.innerHTML = 'Last Name'
    tdLastName.append(lastNameHeader)
    row.append(tdLastName)

    const tdEmail = document.createElement('td')
    const emailHeader = document.createElement('h3')
    emailHeader.innerHTML = 'Email'
    tdEmail.append(emailHeader)
    row.append(tdEmail)

    const tdTitle = document.createElement('td')
    const titleHeader = document.createElement('h3')
    titleHeader.innerHTML = 'Title'
    tdTitle.append(titleHeader)
    row.append(tdTitle)

     return row
}

function createUserRow(user) {
    // console.log(user);
    const row = document.createElement('tr')
    const avatar = document.createElement('td')
    const img = document.createElement('img')
    img.setAttribute('src',`${user.avatar}`)
    avatar.append(img)
    row.append(avatar);
     
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

clearLink.addEventListener("click",(ev) => {
    outerTable.innerHTML = '';
    searchBox.value = '';
})

function fetchAndRender(){
    //console.log("fetchAndRender called !!!!!!")
    const term =  window.location.hash.slice(1) || '';
    outerTable.innerHTML = ''
    searchBox.value = term
   // console.log("fetchAndRender term in hashchange " , term);
    if (term != null && term != undefined && term != "") {
      // console.log("fetchAndRender inside if");
       fetch(`https://acme-users-api-rev.herokuapp.com/api/users/search/${term}`)
            .then(response => response.json())
            .then(data => {
               // console.log("fetchAndRender data ", data)
                if(data.count !=0){
               outerTable.append(createHeaders())
                }
                data.users.forEach(element => {
                    outerTable.append(createUserRow(element))
                });           
                }
            )}
}