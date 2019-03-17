import React from 'react';

class Add extends React.Component{
    constructor(props){
        super(props);
        this.state = {name:"",status:true}
        this.handleChange = this.handleChange.bind(this);
        this.submitChange=this.submitChange.bind(this);
    }
    handleChange(e){
        this.setState({name: e.target.value,status:true});
    }
    submitChange(){
        this.props.vv(this.state);
        this.setState({name: "",status:true});
    }
    render(){
        return(
            <div>
                <input type="text" onChange={this.handleChange} value={this.state.name}/>
                <input type="button" onClick={this.submitChange} value="ADD" />
            </div>
        )
    }
}

export default Add;
