import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {logout} from '../../Actions/authAction';
import {Link} from 'react-router-dom';

const Navbar = ({auth: {isAuthenticated, user}, logout}) => {
    
    const Logout = () => {
        logout();
    }

    const authLinks = (
        <Fragment>
            <li className='nav-user-li'><a href='#!' className='nav-user-a' >{user && user.firstName.charAt(0).toUpperCase() + user.lastName.charAt(0).toUpperCase()}</a></li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/newBlog'>Add Blog</Link></li>
            <li><Link to='/allblogs'>All Blogs</Link></li>
            <li onClick={Logout}><a href='#!'>Logout</a></li>
        </Fragment>
    );
    
    const guestLinks = (
        <Fragment>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </Fragment>
    );

    return (
        <div className='nav'>
            <div className='logo'>NeyaTech Blog</div>
            <nav>
                <ul>
                    {isAuthenticated ? authLinks : guestLinks}
                </ul>
            </nav>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logout})(Navbar);