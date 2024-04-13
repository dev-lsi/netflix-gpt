export const validateForm = (email,password) =>{

    var emailRegex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var passwordRegex = /^(?=.*?[a-z])(?=.*?[0-9]).{4,}$/;

    if(!(emailRegex).test(email)){
        return "Email is not valid!"
    }
    if(!(passwordRegex.test(password))){
        return "Password is not valid!"
    }

    return null;
}