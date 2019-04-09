import React, { Component } from 'react';

import Carousel from 'antd-mobile/lib/carousel';
import WhiteSpace from 'antd-mobile/lib/white-space';
import WingBlank from 'antd-mobile/lib/wing-blank';
import 'antd-mobile/lib/carousel/style/css'; 

export default class extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
          }
    }
    goDetail(){
        this.props.history.push('/detailapp/detail')
    }
    componentDidMount() {
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
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => console.log('slide to', index)}
                    >
                    {this.state.data.map((val, index) => (
                        <a
                        key={val + index}
                        href="http://www.alipay.com"
                        // style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                            alt=""
                        />
                        </a>
                    ))}
                    </Carousel>
                </WingBlank>
                <button onClick={this.goDetail.bind(this)}>去详情页</button>
                </div>
            </div>
        )
    }
}