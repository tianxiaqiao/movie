import React, {Component} from 'react';

export default class extends Component{
    back(){
        let {index , url , type} = this.props;
        index = index || -1
        type = type || 'push'
        if(url){
            // this.props.history.push(url);
            this.props.history[type]('/'+url);
        }else{
            this.props.history.go(index);
        }
        // console.log(this)
    }
    render(){
        return(
            <button onClick={this.back.bind(this)}>点击返回</button>
        )
    }
}