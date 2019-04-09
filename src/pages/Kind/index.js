import React, { Component } from 'react';
export default class extends Component{
    goDetail(){
        console.log(this)
        this.props.history.push('/detailapp/detail')
    }
    render(){
        return(
            <div className = 'box'>
                <header className="header">分类头部</header>
                <div className = "content">分类内容
                    <button onClick = {this.goDetail.bind(this)}>点击</button>
                </div>
            </div>
        )
    }
}