import React from'react'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      newItem:"",
      list : []
   }
  }

delteItem(id){
  const list = [...this.state.list]
  const updatedList = list.filter(item=>item.id !== id)
  this.setState({list:updatedList})
}

  updateInput(input){
    this.setState({newItem:input})
  }
addItem(todoValue){
  if(todoValue!== ""){
    const newItem ={
      id:Date.now(),
      value:todoValue,
      isDone:false
    }
    const updatelist = [...this.state.list,newItem]
    this.setState({list:updatelist})
  }
}
render(){
  return(
    <div>
      <div className="container">
      <h1 className= 'app-title'>React To Do List</h1>
      <div className="container">ADD An Item...</div>
      <br />
      <input type="text"
       className="input-text"
        placeholder="Enter your name"
        value={this.state.newItem}
        onChange={e=>this.updateInput(e.target.value)}
        />
        <button className='add-btn' onClick={()=>this.addItem(this.state.newItem)}>Add</button>
        <div className="list">
          <ul>
            <li>
              <input type="checkbox" name ="" id=''/>
              Learn React JS
              <button className='btn'>Delete</button>
            </li>
            {
              this.state.list.map(el =>{
                return(
                  
            <li key={el.id}>
            <input type="checkbox" name ="" id=''/>
            {el.value}
            <button className='btn'onClick={()=>this.delteItem(el.id)}>Delete</button>
          </li>
                )
              })
            }
          </ul>
        </div>
        </div>
    </div>
   
  )
}

}

export default App