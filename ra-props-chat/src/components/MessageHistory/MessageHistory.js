import Message from "./Message/Message";
import Response from "./Response/Response";
import Typing from "./Typing/Typing";

const MessageHistory = (props) => {
  return (
    <ul className="clearfix">
      {props.list.map(item => {
        if (item.type === 'message') {
          return <Message  key={item.id} from={item.from} time={item.time} text={item.text}/>
        }
        if (item.type === 'response') {
          return <Response key={item.id} from={item.from} time={item.time} text={item.text}/>
        }
        if (item.type === 'typing') {
          return <Typing key={item.id} from={item.from} time={item.time} text={item.text}/>
        }
      })}
    </ul>
  );
}

export default MessageHistory;

