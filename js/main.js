(function () {
    let newUsersList = document.querySelector('.new-users-list');

    // READ THE PDF BEFORE STARTING
    // Step 1-5 is read the pdf.


    // Add your code here
    const userForm = document.querySelector('.new-user-form');



    userForm.addEventListener('submit', function onSubmit(e) {
        e.preventDefault();

        const usernameElement = e.currentTarget[0];
        const cityElement = e.currentTarget[1];
        const provinceElement = e.currentTarget[2];
        const username = usernameElement.value;
        const city = cityElement.value;
        const province = provinceElement.value;

        console.log(usernameElement);
        console.log(username);

        let isFormValid = true;

        if (isValueNotEmpty(username) === true && hasWhiteSpace(username) === false) {
            usernameElement.classList.remove('is-invalid');
        }
        else {
            isFormValid = false;
            usernameElement.classList.add('is-invalid');
        }

        if (isValueNotEmpty(city)) {
            cityElement.classList.remove('is-invalid');
        }
        else {
            isFormValid = false;
            cityElement.classList.add('is-invalid');
        }

        if (isValueNotEmpty(province)) {
            provinceElement.classList.remove('is-invalid');
        }
        else {
            isFormValid = false;
            provinceElement.classList.add('is-invalid');
        }

        if (isFormValid === true) {
            addUser(username, city, province);
            userForm.reset();
        }


    });

    // the isValueNotEmpty function: 
    // returns true if value not empty
    // returns false if the value is empty
    function isValueNotEmpty(value) {
        if (value !== '') {
            return true;
        }
        return false;
    }

    // the hasWhiteSpace function
    // returns true if s has whitespace
    // returns false if s does not have whitespace
    function hasWhiteSpace(s) {
        return (/\s/).test(s);
    }

    // adds user to the page.
    function addUser(username, city, province) {
        let newUser = `<li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">${username}</div>
                ${city}, ${province}
            </div>
            </li>`;
        newUsersList.innerHTML = newUsersList.innerHTML + newUser;
    }
})();