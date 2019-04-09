import React, { Component } from 'react';

import Carousel from 'antd-mobile/lib/carousel';
import WhiteSpace from 'antd-mobile/lib/white-space';
import WingBlank from 'antd-mobile/lib/wing-blank';
import 'antd-mobile/lib/carousel/style/css'; 

export default class extends Component{
    constructor(props){
        // console.log(props)
        super(props);
        this.state = {
            data: ['1', '2', '3', '4', '5', '6'],
            imgHeight: 176,
          }
    }
    goDetail(){
        this.props.history.push('/detailapp/detail')
    }
    componentDidMount() {
        this.props.requestHomeBannerList();
        this.props.requestHomeProList();

        // simulate img loading
        setTimeout(() => {
            this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
        }
        componentDidUpdate() {
        // After the new child element is rendered, change the slideIndex
        // https://github.com/FormidableLabs/nuka-carousel/issues/327
        if (this.state.slideIndex !== this.state.data.length - 1) {
            /* eslint react/no-did-update-set-state: 0 */
            this.setState({ slideIndex: this.state.data.length - 1 });
        }
    }
    render(){
        return(
            <div className = 'box'>
                <header className="header">首页头部</header>
                <div className = "content">
                    <WingBlank>
                        <WhiteSpace />
                        <Carousel
                        autoplay={true}
                        autoplayInterval={1000}
                        infinite
                        selectedIndex={this.state.slideIndex}
                        >
                            {this.props.homebannerlist.map((item,index)=>{
                                return ( 
                                    <a
                                    key={index}
                                    href="###"
                                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                    >
                                    <img
                                        src={'https://www.daxunxun.com' + item}
                                        alt=""
                                        style={{ width: '100%',height:'100%', verticalAlign: 'top' }}
                                    />
                                    </a>
                                )
                            })} 
                        </Carousel>
                    </WingBlank>
                    
                    <button onClick={this.goDetail.bind(this)}>去详情页</button>
                    {this.props.homeprolist.map((item,index)=>{
                        return (
                            <div key={index}>{item.title}</div>
                        )
                    })}
                </div>
            </div>
        )
    }
}