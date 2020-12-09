import {Form, Button, Modal} from "react-bootstrap";
import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {authority, authorityWithGoogle, passwordReset} from "./usersSlice";


const LoginModal = (props) => {
    const [context, setContext] = useState("login")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const loginClick = ()=>{
        dispatch(authority({email:username, password:password}))
    }
    const passwordResetClick = ()=>{
        dispatch(passwordReset({email:username}))
    }
    const loginWithGoogleClick = ()=>{
        console.log("loginWithGoogleClick")
        dispatch(authorityWithGoogle())
    }
    // useEffect(() => {
    //     const loginClick = ()=>{
    //         dispatch(authority({email:username, password:password}))
    //     }
    //     dispatch(authority({email:username, password:password}))
    // })
    return (
        <Modal
            {...props}
            size="lg"
            centered
        >

            <Modal.Body>
                {context === "login" && <LoginPart
                    contextOnchange={() => setContext("forgetPassword")}
                    usernameOnchange={setUsername}
                    passwordOnchange={setPassword}
                    username={username}
                    password={password}
                    loginClick={loginClick}
                    loginWithGoogleClick={loginWithGoogleClick}
                />}
                {context === "forgetPassword" && <ForgetPasswordPart
                    username={username}
                    usernameOnchange={setUsername}
                    contextOnchange={() => setContext("login")}
                    passwordResetClick={passwordResetClick}/>}
            </Modal.Body>
        </Modal>
    );
}

const LoginPart = (props) => {
    const {contextOnchange, usernameOnchange, passwordOnchange, username, password,loginClick,loginWithGoogleClick} = props
    return (<Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={username}
                          onChange={(e) => usernameOnchange(e.target.value)}/>
            <Form.Text className="text-muted">
                unregistered account will automatically sign up !
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password}
                          onChange={(e) => passwordOnchange(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="formBasicForgetPassword">
            <Form.Text className="text-muted">
                <a className="text-decoration-none text-danger" onClick={contextOnchange}>forget password?</a>
            </Form.Text>
        </Form.Group>
        <Form.Group className="d-flex justify-content-between">
            <Button variant="outline-secondary" type="button" onClick={loginWithGoogleClick}>
                sign in with Google
            </Button>
            <Button variant="primary" type="button" onClick={loginClick}>
                submit
            </Button>
        </Form.Group>
    </Form>)
}

const ForgetPasswordPart = (props) => {
    const {contextOnchange, usernameOnchange, username,passwordResetClick} = props
    return (<Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email"
                          placeholder="Enter email that you want to reset the password"
                          value={username}
                          onChange={(e) => usernameOnchange(e.target.value)}/>
            <Form.Text className="text-muted">
                We will send you an email !
            </Form.Text>
        </Form.Group>

        <Form.Group className="d-flex justify-content-between">
            <Button variant="outline-secondary" type="button" onClick={contextOnchange}>
                back to login
            </Button>
            <Button variant="primary" type="button" onClick={passwordResetClick}>
                Confirm
            </Button>
        </Form.Group>
    </Form>)
}

export default LoginModal