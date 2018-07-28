import React from 'react';
import Clock from './clock';
import Tabs from './tabs';


const tabs = [
  {
    id: 0,
    title: "Tab 1",
    content: "One content"
  },
   {
     id: 1,
    title: "Tab 2",
   content: "Content Two"
   },
   {
     id: 2,
     title: "Tab 3",
     content: "Content Three"
   }
];

class Root extends React.Component{
  render(){
    return (
      <div>
        <Clock />
        <Tabs tabs={tabs} react="This is fun!" />
      </div>);
    }
  }

  export default Root;
