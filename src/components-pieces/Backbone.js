
import React from 'react';

import Segment from './Segment';

const Backbone = ({bookShelves, createBook}) => {
//console.log(`the type is`, typeof(createBook))
    const currentlyReading = bookShelves.filter((book) => book.shelf === "currentlyReading");
    const whatToRead = bookShelves.filter((book) => book.shelf === "wantToRead");
    const read = bookShelves.filter((book) => book.shelf === "read");

    return (
        <div>
            <Segment title="Currently Reading" book={currentlyReading} createBook={createBook}/>
            <Segment title="Want To Read" book={whatToRead} createBook={createBook}/>
            <Segment title="Read" book={read} createBook={createBook}/>
        </div>
    )

}

export default Backbone;

/*

  const App () => {
   const [messages, setMessages] = useState([]);
   
   const onMessage = (userName, message) => {
    message = {
        userName: userName,
        text: message,
    }
    setMessage(messages.concat(message))
   }
   
   return (
    {users.map((user) => {
        <CheckWindow  
        user={user}
        messages={messages}
        onMessage={onMessage}   />
    })}
   )
}

export default App;


const CheckWindow = ({ user, messages, onMessagen }) => {
 
const onMessage2 = (message) => {
    onMessage(user.name, message);
}


return (
    <MessageHistory messages={messsages} user={user} />
    <AddMesssage onMessage={onMessage2} />
)

}

export default Check window


const MessageHistory = ({ messages, user}) => {
  return (
    <ul className="message-list"> 
    {messages.map((message) => (
        <li 
        key={index}
        className={message.userName === message.userName ? "message sender" : "message recipient"
        } >
        <p>`${message.userName} : ${message.text}`</p>
        </li>
    ))}
    </ul>
  ) 
}

const addMessage = ({ onMessages, user }) => {

    const [message, setMessage] =  usestate("");

    const handleInputChange = (e) => {
        const { value }  = e.target;

        setMessage(value);
    }

    const handleSubmit = (e) => {
        e.preventDevfault();
        onMesage("value");
        setMessage("")
    }
}

const [contacts, setContacts]

useEffaect(() => {
  const getContacts = async () => {
    const res = await ContactApi.getAll();
    setContacts(res)
  }
}, [])

setContacts(contacts.folter((c) => c.id ))
*/ 