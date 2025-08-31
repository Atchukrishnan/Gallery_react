import Search from "./Components/Search"
import "./style.css"
import Chat from "./Components/Chat"
import chat1 from "./assets/Images/chat_1.jpg"
import chat2 from "./assets/Images/chat_2.jpg"
import chat3 from "./assets/Images/chat_3.jpg"
import chat4 from "./assets/Images/chat_4.jpg"
import chat5 from "./assets/Images/chat_5.jpg"
import chat6 from "./assets/Images/chat_6.jpg"
 var messages = [{   chat_img:chat1,
    name:"Suriya",
    msg:"Hey! Hello, How are you?",
    time:11.06
},{
    chat_img:chat2,
    name:"Udhaya",
    msg:"Hi there! Hope everything going well with you.",
    time:"10.50"
},{
    chat_img:chat3,
    name:"Radha",
    msg:"Hello! How have you been lately?",
    time:"8.10"
},{
    chat_img:chat4,
    name:"Atchaya",
    msg:"Hey! What`s up? Long time no see.",
    time:6.07
},{
    chat_img:chat5,
    name:"Mathu",
    msg:"Hi! Just checking in, how`s everything going?",
    time:"5.40"
},{
    chat_img:chat6,
    name:"Latha",
    msg:"Hello there! How`s your day so far?",
    time:"6.08"
},
]
function App(){
    return(
        <div className="whatsapp">
    <Search></Search>
    {
        messages.map(function(items){
            return<Chat chat_img={items.chat_img} name={items.name} msg={items.msg} time={items.time}></Chat>
        })
    }
</div>
    )
}
export default App