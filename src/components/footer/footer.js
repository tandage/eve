import React from "react";
import {useSelector} from "react-redux";

const Footer = () => {
    const user = useSelector(state=>state.user)
    const getUserName = ()=>user.email.split("@")[0]
    const getUserAvg = ()=>user.picture || ""
    return (
        <div className=" container fixed-bottom  w-50 h-25 mx-auto bg-transparent rounded shadow-lg">
            <div className="row d-flex h-50 align-items-center justify-content-around flex-nowrap">
                    <div className="col-sm-3 d-flex  align-items-baseline justify-content-around" >
                        <img src={getUserAvg()} className="img-fluid mr-1 " style={{height:"2rem",width:"2rem"}}></img>
                        <span className="text-wrap  ">{getUserName()}</span>
                    </div>
                    <button className="btn btn-outline-primary">feature 1</button>
                    <button className="btn btn-outline-secondary">feature 2</button>
            </div>
            <div className="row d-flex h-50 align-items-center justify-content-around">
                <button className="btn btn-outline-warning">feature 3</button>
                <button className="btn btn-outline-info">feature 4</button>
                <button className="btn btn-outline-dark">feature 5</button>
                <button className="btn btn-outline-success">feature 6</button>
            </div>
        </div>
   )

}
export default Footer