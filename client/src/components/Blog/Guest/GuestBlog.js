import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getGuestBlog, removeGuestBlog} from '../../../Actions/guestActions';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const GuestBlog = props => {
    const {guest: {blog, loading}, getGuestBlog, removeGuestBlog} = props;

    useEffect(() => {
        getGuestBlog(props.match.params.id);

        return() => {
            removeGuestBlog();
        }
    }, []);

    if(blog === null && loading === false){
        return <h2>Invalid Blog Id.</h2>
    }
    if(blog === null && loading === true) {
        return <h2>Loading...</h2>
    }

    return (
        <div className='blog-div'>
            {blog &&
                <div className='blog-main'>
                    <h2 className='title'>{blog.title}</h2>
                    <div className='blog-auth-date'>
                        <p className='author'><span style={{color: '#000'}}>by </span>{blog.author}</p>
                        <Moment className='date' format='Do MMMM YYYY, h:mm:ss a'>{blog.date}</Moment>  
                    </div>
                    <img src={blog.image} className='blog-image'/>  
                    <div dangerouslySetInnerHTML={{__html: blog.body}} className='body'></div>
                </div>
            }   
        </div>
    )
}

GuestBlog.propTypes = {
    blog: PropTypes.object.isRequired,
    getGuestBlog: PropTypes.func.isRequired,
    removeGuestBlog: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    guest: state.guest
});

export default connect(mapStateToProps, {getGuestBlog, removeGuestBlog})(GuestBlog);
