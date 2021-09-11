
import React, { Component } from 'react';

class TestMau extends Component {
    constructor(props){
        super(props)
        this.state = {
            color: this.props.color,
            value: this.props.value
        }
    }
    shoot(){
        console.log('shoot this = ',this);
    }

    shoot2 = (a)=>{
        console.log('shoot2 a = ',a);
    }

    render() {
     
        return (
            <div>
                <h2 onClick={()=>this.shoot2('abc')} style={{color:this.state.color}}>{this.state.value}</h2>
            </div>
        );
        
    }

    componentDidMount() {
        console.log('componentDidMount')
        setTimeout(() => {
            this.setState({color: "yellow"})
                console.log('componentDidMount đã thay đổi thành màu vàng')
        }, 1000)
      }
}
export default TestMau;