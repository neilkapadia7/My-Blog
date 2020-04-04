import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

const Alert = ({alerts}) => {
    return (
        alerts.length > 0 &&
        alerts.map(a => (
            <div key={a.id} style={{transition: '.3s'}}>
                <i className='fas fa-info-circle'/>{a.msg}
            </div>
        ))
    )
}

Alert.propTypes = {
    alerts: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    alerts: state.alerts
});

export default connect(mapStateToProps, {})(Alert);
