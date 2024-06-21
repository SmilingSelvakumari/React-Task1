


function Chat(props){
    return(
      <div className='chat'>
        
        <img className='image' src={props.image} alt="pic"></img>
        
        <div>
        <h3>{props.name}</h3>
       
        <p>{props.msg}</p>
        </div>
        <div className='star'>
        <p>{props.time}</p>
       
        <i class="fa-solid fa-star" style={{color: "#73ea71"}}></i>
        </div>
      </div>
    )
  }
export default Chat
 