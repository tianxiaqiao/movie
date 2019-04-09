import React, { Component } from 'react';
import Back from '@/components/common/back'
export default class extends Component{
    render(){
        return(
            <div className = 'box'>
                <header className="header">详情头部
                    <Back {...this.props}/>
                </header>
                <div className = "content">详情内容</div>
            </div>
        )
    }
}