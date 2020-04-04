import React, {useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getAllBlogs, clearErrors} from '../../../Actions/blogActions';
import { Link } from 'react-router-dom';
import {setAlert} from '../../../Actions/alertAction';

import Moment from 'react-moment';

const AllBlogs = ({blog: {allblogs, error}, getAllBlogs, clearErrors, setAlert}) => {
    
    useEffect(() => {
        getAllBlogs();

        if(error) {
            setAlert(error, 'danger');
            clearErrors();
        }

    }, [getAllBlogs, error]);

    if(allblogs === null) {
        return <h4>Loading...</h4>
    }

    return (
        <div>
            {allblogs.map(blog =>
                <Fragment key={blog._id}>
                    <img src={blog.image} height='auto' width='75%' style={{margin: 'auto'}}/>
                    <h2>{blog.title}</h2>
                    <h5>{blog.body}</h5>
                    <p><Link to={`/user/blogs/${blog.user}`}>{blog.author}</Link></p>
                    <Moment format='Do MMMM YYYY, h:mm:ss a'>{blog.date}</Moment>
                </Fragment>
            )}
        </div>
    )
}

AllBlogs.propTypes = {
    blog: PropTypes.object.isRequired,
    getAllBlogs: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
}

const mapStateToProps = state => ({ 
    blog: state.blog
});

export default connect(mapStateToProps, {getAllBlogs, clearErrors, setAlert})(AllBlogs);