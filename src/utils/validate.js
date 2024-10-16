export const validateInputs = (isSignInForm, setValidatorData, setIsNameValid, setIsEmailValid, setIsPassValid, setIsRepassValid, name, email, pass, repass) => {
    const nameRegex = /^[a-zA-Z]{3,21}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passRegex = /^[a-zA-Z0-9]{6,}$/;
    //const repassRegex=/^[a-zA-Z0-9]{6,}$/;
    const result = {};
    if (email) {
        console.log(email)
        if (!emailRegex.test(email.current.value)) {
            console.log("Email not valid")
            setIsEmailValid(false);
            result['email'] = "Email is not Valid!"
            console.log(result)
        } else {
            console.log("Email valid")
            setIsEmailValid(true);
            delete result['email'];
        }

    }

    if (pass) {
        if (!passRegex.test(pass.current.value)) {
            console.log("Pass not valid")
            setIsPassValid(false);
            result['pass'] = "Password is not Valid!";
            console.log(result);
        } else {
            console.log("Pass valid")
            setIsPassValid(true);
            delete result['pass'];
        }
    }

    if (!isSignInForm) {

        if (!nameRegex.test(name.current.value)) {
            setIsNameValid(false);
            result['name'] = "Name is not Valid!";
            console.log(result);
        } else {
            console.log("Name valid")
            setIsNameValid(true);
            delete result['name'];
        }


        if ((pass.current.value !== repass.current.value)) {
            console.log("PASS SON  not EQUAL")
            setIsRepassValid(false);
            result['repass'] = "Passwords are not Equal!";
            console.log(result)
        } else {
            console.log("Repass valid")
            setIsRepassValid(true);
            delete result['repass'];

        }


    }



    setValidatorData({ ...result })
}

