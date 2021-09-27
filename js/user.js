
const Name = document.querySelector('#name');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const btn = document.querySelector('.btn');
const userlist = document.querySelector('#user-list');

btn.addEventListener('click', function(e){
    e.preventDefault();
    
    if(Name.value == '' && phone.value == '' && email.value == '' && password.value == ''){
    alert('Please Fill Up The Input Field');

   } else {
         
        // Crate new row
        const newRow = document.createElement('tr');

        // Crate new Name
        const newName = document.createElement('td');
        newName.innerHTML = Name.value;
        newRow.appendChild(newName);

        // Crate new Phone
        const newPhone = document.createElement('td');
        newPhone.innerHTML = phone.value;
        newRow.appendChild(newPhone);

        // Crate new Email
        const newEmail = document.createElement('td');
        newEmail.innerHTML = email.value;
        newRow.appendChild(newEmail);

        // Crate new Password
        const newPassword = document.createElement('td');
        newPassword.innerHTML = password.value;
        newRow.appendChild(newPassword);

        // Final Step
        userlist.appendChild(newRow);
    };
    document.getElementById('form').reset();
})