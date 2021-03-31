import React from 'react';
    import {Link} from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
                <div className="container">
                    <Link to="/" className="navbar-brand" >
                        Contact Book
                   </Link>
                        <Link className="btn btn-light ml-auto" to="/add/contact" > Create Contact</Link>
                    
                </div>

            </nav>

        </div>
    )
}


export default Navbar;