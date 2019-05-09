import React,{Component} from 'react'
const Buttons=(props)=>{
return (
<button type="button" class="btn btn-primary btn-lg" onClick={props.clicked}>{props.data}</button>
);
}
export default Buttons;