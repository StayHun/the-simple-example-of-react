import React from 'react'

class Choose extends React.Component {
    constructor(props){
        super(props);
        this.allChange=this.allChange.bind(this);
        this.completedChange=this.completedChange.bind(this);
        this.uncompletedChange=this.uncompletedChange.bind(this);
    }
    allChange(){
        this.props.kk("all");
    }
    completedChange(){
        this.props.kk("completed");
    }
    uncompletedChange(){
        this.props.kk("uncompleted");
    }
    render() {
        return (
            <div>
                <input type="button" value="全部" onClick={this.allChange}/>&nbsp;
                <input type="button" value="已完成" onClick={this.completedChange}/>&nbsp;
                <input type="button" value="未完成" onClick={this.uncompletedChange}/>
            </div>
        )
    }
}

export default Choose;