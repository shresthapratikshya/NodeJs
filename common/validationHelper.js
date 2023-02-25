((validationHelper) => {
    validationHelper.signUpValidation = async (request) => {
        let isValid = false;

        const username = request.username;
        const email = request.email;
        const password = request.password;
        const phone = request.phone;
        //const phoneValidate = /^ [a - zA - Z0 - 9]{ 3, 30}$/;
        const emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (username.length < 3 || username == "") {
            console.log("Please enter valid name");
            isValid = false;
        } else if (!emailValidate.test(email)) {
            console.log("Please enter valid email");
            isValid = false;
        } else if (password.length < 3) {
            console.log("Please enter strong password");
            isValid = false;
        } else if (phone.length < 10) {
            console.log("Please enter correct phone number");
            isValid = false;
        } else {
            console.log("Data has been successfully entered");
            isValid = true;
        }
        return isValid;
    }
})(module.exports)