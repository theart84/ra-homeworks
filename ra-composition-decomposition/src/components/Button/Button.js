import React from 'react';

/**
 * Кастомный компонент кнопки
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

const Button = (props) => (
  <button
    className={props.className}
    type={props.type}
    disabled={props.disabled}
  >
    {props.children}
  </button>
);

export default Button;
