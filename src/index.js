import React from 'react';
import ReactDOM from 'react-dom';

const Menu = (props)=>(
   <nav>
       <ul>
           <li>{props.g}</li>
           <li>{props.w}</li>
           <li>{props.a}</li>
           <li>{props.c}</li>
           <li>{props.s}</li>
       </ul>
   </nav> 
);
ReactDOM.render(<Menu greeting='hello, check my menu' work='work' about='about' con='contacts' sth='sth else'/>, document.getElementById("root"));