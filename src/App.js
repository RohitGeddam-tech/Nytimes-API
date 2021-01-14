import React from 'react';
import './App.css';
import Api from './Api';
import ButtonClick from './ButtonClick';
import ContentList from './ContentList';


class App extends React.Component {

  state = {content: []};

  // constructor (){
  //   super();
  //   Api.get('world.json?api-key=QxNol8gzE0dtO1UPLyaexNJx7ogvRc20').then
  //   (
  //     res => {console.log(res.data.results)
  //       this.setState({ content: res.data.results })
  //     }
  //   )
  // }

  onButtonClick = () => {
    Api.get('world.json?api-key=QxNol8gzE0dtO1UPLyaexNJx7ogvRc20').then(
      res => {console.log(res.data.results)
        this.setState({ content: res.data.results })
      })
      
  console.log(this.state.content.title)
  }

  render() {
      return (
          <div className='ui container'>
            <div>
              <ButtonClick onClick={this.onButtonClick} auth='World News' />
              <ContentList News={this.state.content}/>
            </div>
          </div>
      );
  }
}
export default App;
