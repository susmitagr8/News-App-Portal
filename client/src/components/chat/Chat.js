import  React from 'react'
import './Chat.css'
import Pusher from 'pusher-js';
export default class ChatDashboard extends React.Component
{
constructor() {
   super()
   this.state={
       texts: [],
       currentMsg: "",
       placeMsg: "",
   }
   var pusher = new Pusher('0ba2650a12854efe692d', {
    cluster: 'ap2',
    forceTLS: true
  });
  var channel = pusher.subscribe('my-channel');
channel.bind('my-event', (data) =>{
    this.setState({placeMsg: ""})
  if(data.art_id === this.props.match.params.id){
    this.setState(prevState => ({
        texts: [...prevState.texts, data]
      }))
  }
});
}
componentDidMount(){
   this.getMessages()
   alert(this.props.match.params.id)
}
getMessages() {
    fetch('http://localhost:8081/messageget',{
        method: 'get',
        headers: new Headers({
            authorization: sessionStorage.getItem('auth'),
            article_id: this.props.match.params.id
        })
    })
    .then((res) =>res.json())
    .then((res)=>{
        debugger;
        if(res === null){
            this.setState({texts : []})
            this.setState({currentMsg: ""})
            this.setState({placeMsg: "BE FIRST TO COMMENT"})
        } else {
        this.setState({texts : res})
        this.setState({currentMsg: ""})
        }
    })
}
handleMessageChange=(e) =>{
    this.setState({currentMsg: e.target.value});
}
submitMessage =  (x) => {
    debugger;
    x.preventDefault()
    fetch('http://127.0.0.1:8081/messageadd', { 
        mode : "cors",
        method: 'post',
        headers: new Headers({
            authorization: sessionStorage.getItem('auth')
        }),
        body : JSON.stringify({
            "art_id": this.props.match.params.id,
            "message": this.state.currentMsg, 
        })}).then((res) => {
            console.log(res)
            this.setState({
           currentMsg: ""
            })
        })
}
render() {
    const s = this.state
    if(s.text !== null){
    return (
        <div>
            <div className="cont">
            {s.texts.map(x => (
                <div className={"container darker " + (x.aut_id === sessionStorage.getItem('userName')? 'current': 'bb')}>
                <div className={(x.aut_id === sessionStorage.getItem('userName')? 'pp': 'bb1')}>
                <div className="author">{x.aut_id}</div>
                <div className="content">{x.message}</div>
                </div>
                </div>
            ))}
            </div>
            <form className="input" onSubmit={(e) => this.submitMessage(e)}>
               <input type="text" placeholder={this.state.placeMsg} ref="msg" className="msg" value={this.state.currentMsg} onChange={this.handleMessageChange}/>
               <input type="submit" value="Submit" />
            </form>
        </div>
    )
            }
            return 
    //this.texts= [{author: "abhi", content: "hello"}, {author: "sus", content: "hi"}, {author: "nish", content: "hi"}, {author: "gar", content: "hi"}, {author: "sus", content: "hi"}]
//     return (
//     <div>   
//         <div className="cont">                 
//     {s.texts.map(text =>(
//            <div className={"container darker " + (text.aut_id === 'sus'? 'current': 'bb')}>
//            <div>{text}</div>
//            <div className={(text.aut_id === 'sus'? 'pp': 'bb1')}>
//            <div className="author">{text.aut_id}</div>
//            <div className="content">{text.message}</div>
//            </div>
//           </div>
//     ))}
//     </div>
//     <form className="input">
//     <input type="text" ref="msg" className="msg" />
//     <input type="submit" value="Submit" />
// </form>
//     </div> )
}
}