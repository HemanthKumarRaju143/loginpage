import { useState } from "react"
import { isEmailValid } from "../Utilis/utilis"

function Login(){

    let [LoginData , setLoginData] = useState({
        email : "" , password : ""
    })

    let [LoginDataErr , setLoginDataErr] = useState({
        emailErr : "" , passwordErr : ""
    })

    let handleLoginData = () =>{
        let hasErr = false

        let tempErr = {...LoginDataErr}

        if(!isEmailValid(LoginData.email)){
            hasErr = true
            tempErr = {...tempErr , emailErr : "plzzz enter valid email"}
        }else if(LoginData.email.trim().length < 0){
            hasErr = true
            tempErr = {...tempErr , emailErr : "plzzz enter email"}
        }else{
            tempErr = {...tempErr , emailErr : ""}
        }

        if(LoginData.password.trim().length == 0){
            hasErr = true
            tempErr = {...tempErr , passwordErr : "plzzz enter password"}
        }else if(LoginData.password.trim().length < 2){
            hasErr = true
            tempErr = {...tempErr , passwordErr : "plzzz enter valid password"}
        }else{
            tempErr = {...tempErr , passwordErr : ""}
        }

        setLoginDataErr({...tempErr})

        if(hasErr == false){
            alert("api is success")
        }else{
            alert("plzz check details something went wrong //")
        }
    } 

    return(
        <>
         <div className="container vh-100">
            <div className="row d-flex justify-content-center margin-login">
                <div className="col-4 bg-warning">
                    <div className="text-center mt-3">
                        <h2>Login</h2>
                    </div>

                    <div className="mt-3 p-1">
                        <label><h4>Email</h4></label>
                        <input type="text" className="form-control" placeholder="plzzz enter email" onChange={e => setLoginData({...LoginData , email : e.target.value})}/>
                        <div className="text-danger">{LoginDataErr.emailErr}</div>
                    </div>

                    <div className="mt-3 p-1">
                        <label><h4>Password</h4></label>
                        <input type="text" className="form-control" placeholder="plzzz enter password" onChange={e => setLoginData({...LoginData , password : e.target.value})}/>
                        <div className="text-danger">{LoginDataErr.passwordErr}</div>
                    </div>

                    <div className="d-grid gap-2 mt-4 mb-4">
                        <button className="btn btn-primary" onClick={() => {handleLoginData()}}>Submit</button>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}

export default Login