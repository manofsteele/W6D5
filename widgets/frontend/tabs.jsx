import React from 'react';

class Tabs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: 0
    };
  }

  tabToFront(id){
    this.setState( { selectedTab: id});
    let article = document.querySelector("article.tab-content");
    article.innerHTML = this.props.tabs[id].content;
  }


  render(){
    console.log(this.props);
    return (
      <div className="tabs">
      <ul className="tab-header">
        {
          this.props.tabs.map((tab, idx) =>(
            <li key={tab.id}>
              <h1  onClick={() => (this.tabToFront(tab.id))}>{tab.title}</h1>
            </li>

          ))
        }
      </ul>
      <article className="tab-content"></article>
      </div>
    );
  }

}

export default Tabs;
