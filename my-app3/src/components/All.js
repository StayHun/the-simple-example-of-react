import React from 'react';
import Add from './Add';
import Lists from './Lists';
import Choose from './Choose';
class All extends React.Component {
    constructor(props) {
        super(props);
        this.state = { things: [{ name: "西瓜", status: true }, { name: "苹果", status: true }] };
        this.add = this.add.bind(this);
        this.addElse = this.addElse.bind(this);
        this.chooser = this.chooser.bind(this);
        this.choose = "all";
        this.cc = this.state.things;
        console.log(this.cc);
    }
    //this.cc =this.state.things;
    add(aa) {
        let bb = this.state.things;
        //bb.unshift(aa);
        // alert("fddf");
        bb.splice(bb.length, 0, aa);
        this.setState({ things: bb })
    }
    
    addElse(aa,ii) {
        let bb = this.state.things;
        bb.splice(ii,1);
        //bb.unshift(aa);
        //alert("jb");
        bb.splice(ii, 0, aa);
        this.setState({ things: bb })
    }

    chooser(dd) {
        console.log(dd);
        this.choose = dd;
        if (this.choose === "uncompleted") {
            this.cc = [];
            for (let i = this.state.things.length - 1; i >= 0; i--) {
                if (this.state.things[i].status)
                    this.cc.unshift(this.state.things[i])
            }
            console.log(this.cc);
        }
        else if (this.choose === "completed") {
            this.cc = [];
            for (let i = this.state.things.length - 1; i >= 0; i--) {
                if (!this.state.things[i].status)
                    this.cc.unshift(this.state.things[i])
            }
            console.log(this.cc);
        }
        else {
            this.cc = this.state.things;
        }
        let bb = this.state.things;
        this.setState({ things: bb })
    }
    render() {
        console.log(this.cc);
        return (
            <div>
                <Add vv={this.add} />
                <Lists aaa={this.cc} vvv={this.addElse}/>
                <Choose kk={this.chooser} />
            </div>
        )
    }
}

export default All;