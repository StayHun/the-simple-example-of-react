import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: this.props.sss.name, status: this.props.sss.status };
        this.handleChange = this.handleChange.bind(this);
        this.setState({ name: this.props.sss.name, status: this.state.status })
        // const mm = "";
        // if (!this.state.status) {
        //     this.mm = "line-through";
        // }
        // else {
        //     this.mm = "";
        // }
    }
    handleChange() {
        //alert("dvsdv");
        this.setState({ name: this.props.sss.name, status: !this.state.status }, function() {  
            this.loadList();  
          })
    }
    loadList(){
        // let ff = this.state.status;
        // console.log(ff);
        // if (!ff) {
        //     this.mm = "line-through";
        // }
        // else {
        //     this.mm = "";
        // }
        // console.log(this.props.sss.name);
        // console.log(this.state);
        this.props.change(this.state,this.props.index);
    }
    render() {
            return (
                <dev>
                    <label onClick={this.handleChange} style={{ textDecoration: this.props.sss.status?"":"line-through" }}>{this.props.sss.name}</label><br />
                </dev>
            )
        
    }
}
class Lists extends React.Component {
    render() {
        const aa = this.props.aaa;
        return (
            <div>
                {aa.map((item, index) => (<List style={{ textDecoration: this.mm }} index={index} key={index} sss={item} change={this.props.vvv}/>))}
            </div>
        )
    }
}

export default Lists;