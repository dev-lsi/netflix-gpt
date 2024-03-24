export const validateInputData = (email, password, name) => {
  
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/.test(
    password
  );
  
  // let isNameValid=false;
  // if(name){
  //   isNameValid = /^[A-Za-z]{2,}$/.test(
  //       name
  //     );
  // }

  if (!isEmailValid) return "Email is not valid!";
  if (!isPasswordValid) return "Password is not valid!";
  //if (!isNameValid) return "Name is not valid!";
 
  return null;
};
