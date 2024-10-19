export const validateInputs = (isSignInForm, setValidatorData, setIsNameValid, setIsEmailValid, setIsPassValid, setIsRepassValid, name, email, pass, repass) => {
    const nameRegex = /^[a-zA-Z]{3,21}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passRegex = /^[a-zA-Z0-9]{6,}$/;
    const result = {};
    if (email) {
       
        if (!emailRegex.test(email.current.value)) {
            setIsEmailValid(false);
            result['email'] = "Email is not Valid!"
        } else {
            setIsEmailValid(true);
            delete result['email'];
        }

    }

    if (pass) {
        if (!passRegex.test(pass.current.value)) {
            setIsPassValid(false);
            result['pass'] = "Password is not Valid!";
        } else {
            setIsPassValid(true);
            delete result['pass'];
        }
    }

    if (!isSignInForm) {

        if (!nameRegex.test(name.current.value)) {
            setIsNameValid(false);
            result['name'] = "Name is not Valid!";
        } else {
            setIsNameValid(true);
            delete result['name'];
        }


        if ((pass.current.value !== repass.current.value)) {
            setIsRepassValid(false);
            result['repass'] = "Passwords are not Equal!";
        } else {
            setIsRepassValid(true);
            delete result['repass'];
        }


    }



    setValidatorData({ ...result })
}

