import React from "react";

const Header = () => {

    return (< nav className="navbar navbar-expand-lg navbar-light  fixed-top bg-transparent ">
        <form className="form-inline mx-auto ">
            <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </nav>)

}
export default Header