import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadUser} from '../../Actions/authAction';

import Blogs from '../Blog/Blogs';
import {getBlogs} from '../../Actions/blogActions';

const Home = ({loadUser, getBlogs, blog: {blogs}}) => {

    useEffect(() => {
        loadUser();
        getBlogs();

    }, []);

    return (
        <div>
            <h2>Home</h2>
            {blogs === null 
                ? <h5>Loading....</h5>
                : <Blogs blogs={blogs}/> 
            }
        </div>
    )
}

const mapStateToProps = state => ({
    blog: state.blog
});

export default connect(mapStateToProps, {loadUser, getBlogs})(Home);