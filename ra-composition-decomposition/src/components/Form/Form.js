import React from 'react';

/**
 * Кастомный компонент формы
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

const Form = (props) => {
  const onSubmitHandler = (event) => {
    props.onSubmit(event)
  }

  return (
    <form
      className={props.className}
      onSubmit={onSubmitHandler}
      action={props.action}
      method={props.method}
    >
      {props.children}
    </form>
  )
}

export default Form;
