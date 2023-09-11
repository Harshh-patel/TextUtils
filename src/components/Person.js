import React, { Component } from 'react';
import {Man} from './Man';
class Person extends Component {
    // constructor() {}

    state = {  } 
    render() { 

        
        // return (
        //     <div className='App-header'>
        //       <h1><i>Welcome To TUVOC</i></h1>
        //       <h2> Testing</h2>
              
        //        {/*  <div>
        //         Name:TUVOC TECH
        //         </div>
        //        <div>
        //         Age:21 years 
        //         </div> */}
        //         {/* <Man/> */}

        //     </div>
        // );

        return React.createElement( 'div',{class: "App-header"},
               React.createElement(('h1'),null, 
                React.createElement("i",null,"Welcome To TUVOC")));

      
    }
}
 
export default Person; 