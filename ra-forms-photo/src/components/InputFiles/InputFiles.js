import React, {useState} from 'react';
import shortId from 'shortid';
import PropTypes from 'prop-types';
import classes from './InputFiles.module.css';
import {fileToDataUrl} from "../../utils/fileReader";

const InputFiles = (props) => {
  const [inputFiles, setInputFiles] = useState('');
  const onChangeHandler = async (event) => {
    const files = [...event.target.files];
    let urls = await Promise.all(files.map(o => fileToDataUrl(o)));
    urls = {
      id: shortId.generate(),
      url: urls[0]
    }
    setInputFiles('')
    props.addNewImage(urls)
  }

  return (
    <div className={classes.container}>
      <div className={classes["input-wrapper"]}>
        <label htmlFor="inputFiles" className="input-label">
          <span className={classes["input-span"]}>Click me!</span>
          <input
            type="file"
            value={inputFiles}
            onChange={onChangeHandler}
            className={[classes.container, classes['visually-hidden']].join(' ')}
            id="inputFiles"/>
        </label>
      </div>
    </div>
  )
}

InputFiles.propTypes = {
  addNewImage: PropTypes.func.isRequired
}

export default InputFiles
