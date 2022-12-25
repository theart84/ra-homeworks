const Message = ({from, time, text = ''}) => {
  return (
    <li>
      <div className="message-data align-right">
        <span className="message-data-time">{time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from.name}</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-right">
        {text}
      </div>
    </li>
  );
}

export default Message;
