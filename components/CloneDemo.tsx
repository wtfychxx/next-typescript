import React from 'react'

class Demo extends React.Component{
    render() {
        return <p onClick={this.props.click}>This is Demo. Click me.</p>;
    }
}

function CloneDemo() {
    const clone = React.cloneElement(<Demo />, {
      click: () => {
        alert("You clicked Demo :)");
      }
    });
  
    return (
      <div className="App">
        {clone}
      </div>
    );
}

export default CloneDemo;