import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ru';
import DateTime from "./DateTime";

const withDateTimePretty = (Component) => {
  const HOCComponent = (props) => {
    const {date} = props;
    const showPrettyTime = moment(date).fromNow() ;
    return <Component {...props} date={showPrettyTime}/>
  }
  HOCComponent.displayName = 'withDateTimePrettyHOC';
  return HOCComponent; 
}

withDateTimePretty.propTypes = {
  date: PropTypes.string.isRequired,
}


export default withDateTimePretty;
