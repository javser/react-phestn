import React,{Component} from "react";
import "./style.css";

import Header from "./components/Header";

function List ({items}) {
  let ll = items.map((i,n)=><li key={n}>{i}</li>);
  return <ul>{ll}</ul>
}

function Add ({onSubmit}) {
  const [fi,setfi]=React.useState('');
  return (
    <form action='' onSubmit={(e)=>{
      onSubmit(e.target.newItem.value); 
      e.preventDefault();
      setfi(e.target.newItem.value)
      }
    }>
      <input type='text' name='newItem' />
      <input type='submit' value='add' />
      <span>{fi}</span>
    </form>
  );
}

class App extends Component {
  state = {items:[]};
  handleSubmit = (val) => this.setState({items:this.state.items.concat([val])});
  render() {
    return (
      <div>
        <Header title={"todo-l-app"} />
        <Add onSubmit={this.handleSubmit} />
        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
