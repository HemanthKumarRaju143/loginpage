import { useState } from "react"
import { isEmailValid } from "../Utilis/utilis"

function SignUp(){

    let [signUpData , setSignUpData] = useState({
        firstName : "" , lastName : "" , email : "" , password : "" , mobile : ""
    })

    let [signUpDataErr , setSignUpDataErr] = useState({
        firstNameErr : "" , lastNameErr : "" , emailErr : "" , passwordErr : "" , mobileErr : ""
    })

    const handleSignUPData = () =>{
      
        let hasErr = false

        let tempErr = {...signUpDataErr}

        if(signUpData.firstName.trim().length == 0){
            hasErr = true
            tempErr = {...tempErr , firstNameErr : "plzzz enter first name"}
        }else if(signUpData.firstName.trim().length < 2){
            hasErr = true
            tempErr = {...tempErr , firstNameErr : "plzzz enter valid first name"}
        }else{
            tempErr = {...tempErr , firstNameErr : ""}
        }

        if(signUpData.lastName.trim().length == 0){
            hasErr = true
            tempErr = {...tempErr , lastNameErr : "plzzz enter first name"}
        }else if(signUpData.lastName.trim().length < 2){
            hasErr = true
            tempErr = {...tempErr , lastNameErr : "plzzz enter valid first name"}
        }else{
            tempErr = {...tempErr , lastNameErr : ""}
        }

        if(!isEmailValid(signUpData.email)){
            hasErr = true
            tempErr = {...tempErr , emailErr : "plzzz enter valid email"}
        }else if(signUpData.email.trim().length < 0){
            hasErr = true
            tempErr = {...tempErr , emailErr : "plzzz enter email"}
        }else{
            tempErr = {...tempErr , emailErr : ""}
        }

        if(signUpData.password.trim().length == 0){
            hasErr = true
            tempErr = {...tempErr , passwordErr : "plzzz enter password"}
        }else if(signUpData.password.trim().length < 2){
            hasErr = true
            tempErr = {...tempErr , passwordErr : "plzzz enter valid password"}
        }else{
            tempErr = {...tempErr , passwordErr : ""}
        }

        if(signUpData.mobile.trim().length == 0){
            hasErr = true
            tempErr = {...tempErr , lastNameErr : "plzzz enter mobile number"}
        }else if(signUpData.mobile.trim().length > 10 || signUpData.mobile.trim().length < 10){
            hasErr = true
            tempErr = {...tempErr , lastNameErr : "plzzz enter valid mobile number"}
        }else{
            tempErr = {...tempErr , lastNameErr : ""}
        }

        setSignUpDataErr({...tempErr})

        if(hasErr == false){
            alert("api is success")
        }else{
            alert("something went wrong")
        }


    }

    return(
        <>
         <div className="container vh-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-5 p-4 bg-warning shadow">
                    <div className="text-center">
                        <h2><strong>SignUp</strong></h2>
                    </div>

                    <div className="mt-3">
                        <label><h5>First Name</h5></label>
                        <input type="text" className="form-control" placeholder="plzzz enter first Name" onChange={e => setSignUpData({...signUpData , firstName : e.target.value})}/>
                        <div className="text-danger">{signUpDataErr.firstNameErr}</div>
                    </div>

                    <div className="mt-3">
                        <label><h5>Last Name</h5></label>
                        <input type="text" className="form-control" placeholder="plzzz enter Last Name" onChange={e => setSignUpData({...signUpData , lastName : e.target.value})}/>
                        <div className="text-danger">{signUpDataErr.lastNameErr}</div>
                    </div>

                    <div className="mt-3">
                        <label><h5>Email</h5></label>
                        <input type="text" className="form-control" placeholder="plzzz enter email" onChange={e => setSignUpData({...signUpData , email : e.target.value})}/>
                        <div className="text-danger">{signUpDataErr.emailErr}</div>
                    </div>

                    <div className="mt-3">
                        <label><h5>Password</h5></label>
                        <input type="text" className="form-control" placeholder="plzzz enter password" onChange={e => setSignUpData({...signUpData , password : e.target.value})}/>
                        <div className="text-danger">{signUpDataErr.passwordErr}</div>
                    </div>

                    <div className="mt-3">
                        <label><h5>Mobile Number</h5></label>
                        <input type="text" className="form-control" placeholder="plzzz enter mobile number" onChange={e => setSignUpData({...signUpData , mobile : e.target.value})}/>
                        <div className="text-danger">{signUpDataErr.mobileErr}</div>
                    </div>

                    <div className="d-grid gap-2 mt-4">
                        <button className="btn btn-primary" onClick={() =>  handleSignUPData()}>Submit</button>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}

export default SignUp