import React from 'react';
import 'antd/dist/antd.css'
import './index.css'
import { Carousel } from 'antd';
import { ReloadOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_2246726_snd69n8q9es.js'
  ],
});

class Carousels extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          showData: [false, false, false]
      }
    }

    setArr (i) {
      let arrs = this.state.showData
      arrs[i] = true
      this.setState({
        showData: arrs
      })
    }

    render() {
      const arr = [
        {name: '江夏区', icon: 'icon-cloudy', currentem: '10', minTem: '5', maxTem: '15', weather: '多云'}, 
        {name: '蔡甸区', icon: 'icon-lightning', currentem: '16', minTem: '7', maxTem: '25', weather: '雷电'}, 
        {name: '洪山区', icon: 'icon-sunny', currentem: '26', minTem: '15', maxTem: '29', weather: '晴'}
      ]
      return (
        <div className="weather-content">
          <div className="weather-bg"></div>
          <div className="carousel-column">
            <div className="carousel-content">
              <div onClick={() => this.refs.carous.prev()} className="carousel-icon">
                <LeftOutlined />
              </div>
              <div className="carousel-block">
                <Carousel ref='carous'>
                  {
                    arr.map((s, i) => {
                      return (
                        <div className="contentStyle" key={i}>
                          <div className="carousel-city">
                            {s.name}
                          </div>
                          <div>
                          {
                            this.state.showData[i]?(
                              <div className="carousel-cloud">
                                <IconFont style={{fontSize: '130px'}} type={s.icon} />
                                <div><span className="carousel-temperature">{s.currentem}<sup>。</sup></span></div>
                              </div>
                            ):(
                              <ReloadOutlined onClick={() => this.setArr(i)} className="carousel-reload"/>
                            )
                          }
                          </div>
                          <div className="carousel-tem">
                            {
                              this.state.showData[i]?(
                                <div>
                                  <div>
                                    <span className="carousel-temperature">{s.minTem}<sup>。</sup></span>
                                    <span className="carousel-temperature">{s.maxTem}<sup>。</sup></span>
                                  </div>
                                <div>{s.weather}</div>
                                </div>
                              ):null
                            }
                          </div>
                        </div>
                      )
                    })
                  }
                </Carousel>
              </div>
              <div onClick={() => this.refs.carous.next()} className="carousel-icon">
                <RightOutlined />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  export default Carousels