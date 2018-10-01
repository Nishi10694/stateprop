
import React from 'react'


class StatefulComponent extends React.Component
{

constructor(props){
	super(props)
	this.state ={
		items: props.items,
		newItem: "",
		
	}
	this.addItems =this.addItems.bind(this)
	this.handleChange =this.handleChange.bind(this)
}

handleChange(e){
	this.setState({
		newItem: e.target.value
	})
}
addItems(){
	this.setState({
		items:[...this.state.items, this.state.newItem],
		newItem: ''
	})
	
	}


render(){
	return(

		<div>
				
				<ul>
					{
						this.state.items.map(
							itemvar=>
							<li>
							{itemvar}
							</li>
							)
					}
				</ul>
				<input type='text'
				placeholder='Type here to add items'
				value ={this.state.newItem}
				onChange ={this.handleChange}
				/>
				<button
				onClick={this.addItems}
				>Add Item to List </button>
				
				</div>
				
			)
     	}

}
export default StatefulComponent
