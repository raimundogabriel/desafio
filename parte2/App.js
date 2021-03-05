import React from 'react';

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

class Nome extends React.Component {
  render(){
      return <div>
          <li>
              
          </li>
          </div>
  }
}

class MyHeader extends React.Component {
  render() {
    return (
      <div>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
      </div>
    );
   
}
}

ReactDOM.render(<MyHeader />, document.getElementById('root'));

const myfirstelement = (
  <div> 
      <h1>Hello React!</h1>
      <Nome nome="gabriel" />
      <ul>
          <li>Apples</li>
          <li>Bananas</li>
          <li>Cherries</li>
      </ul>
  </div>
);


export default Car;
