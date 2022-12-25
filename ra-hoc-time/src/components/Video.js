import React from 'react';
import PropsTypes from 'prop-types';
import withDateTimePretty from './DataTimePretty';
import DateTime from './DateTime';

const Video = ({url, date}) => {
  return (
    <div className="video">
      <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen/>
      <DataTimePretty date={date}/>
    </div>
  );
};

const DataTimePretty = withDateTimePretty(DateTime);

Video.propTypes = {
  url: PropsTypes.string.isRequired,
  date: PropsTypes.string.isRequired,
}

export default Video;
