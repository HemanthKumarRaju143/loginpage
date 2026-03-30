
export const isEmailValid = (email) =>{
   let emailReg = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
    return emailReg.test(email)
}