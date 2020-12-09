import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.css"
import {IndexLink, Link} from "react-router-3";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import FooterLoginButton from "./components/footer/footerloginbutton";
import LoginModal from "./components/modals/loginmodal";
import {useSelector} from "react-redux";


const App = (props) => {
    const isLogin = useSelector(state=>state.user.isLogin)
    const [show,setShow] = useState(false)
    useEffect(()=>{
        if (isLogin===true)
             setShow(false)
    },[isLogin])

    return (
        <div>
           <Header />
            {props.children}
            {isLogin?<Footer />:  <FooterLoginButton clickButton={()=>setShow(true)} />}
            {show && <LoginModal show={show} onHide={()=>setShow(false)} />}
        </div>
    )
}

export default App;
