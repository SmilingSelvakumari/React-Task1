import Searchbar from './components/search'
import Chat from'./components/chat'
import one from './assets/images/profile1.jfif';
import two from './assets/images/two.jfif';
import three from './assets/images/three.jfif';
import four from './assets/images/four.jfif';
import five from './assets/images/five.jfif';
import six from './assets/images/six.jfif';


var person=[{
    image:one,
    name:"Jeny",
    msg:"Hi,I will send you documents as soon as possible.",
    time:"10.30am"
  
  },
  
  {
    image:two,
    name:"Reena",
    msg:"Are you going to business trip next week?",
    time:"7.30am"
  
  },
  {
    image:three,
    name:"Srimathi",
    msg:"I suggest to start a new business soon...",
    time:"11.30pm"
  
  },
  {
    image:four,
    name:"Vidhusa",
    msg:"Hi",
    time:"9.30am"
  
  },
  {
    image:five,
    name:"Krithish",
    msg:"Your good name pls.",
    time:"5.30pm"
  
  },
  {
    image:six,
    name:"Sindhu",
    msg:"Hello,How are You",
    time:"1.30pm"
  
  },
  
  ]
  
  function App(){
    return(<div>
      <Searchbar></Searchbar>
    {
    
      person.map(function(item){
       return <Chat image={item.image} name={item.name} msg={item.msg} time={item.time}></Chat>  
      })
      }
  
</div>
  )}
  export default App