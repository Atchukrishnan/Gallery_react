import star from "../assets/Images/star.png"
function Chat(props){
    return(
        <div className="chat">
            <div className="chat_1"><img src={props.chat_img} alt="" />
            <div><h2>{props.name}</h2>
            <p>{props.msg}</p></div>
            </div>
            <div className="chat_2"><img src={star} alt="star" /><p>{props.time}</p></div>
        </div>
    )
}
export default Chat
