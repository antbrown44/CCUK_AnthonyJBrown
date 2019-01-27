import React, {Component} from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'

export default class NewsItem extends Component {
    render() {
        return (
            <div>
             <Image  src='https://news.bbcimg.co.uk/nol/shared/img/bbc_news_120x60.gif' className='header-image' />
             <h2 className='header'>News Feed</h2>
             <input style={{border: 'none', backgroundColor: '#EBF6F4'}} onClick={this.props.reloadClick}  type='button' value='Reload Feed' />
                <Grid>
                    <hr />
                    {this.props.newsitems.map((item, index) => 
                        <div key={index}>
                            <Row>
                                <Col sm={8} xs={12}  className='main-section'>
                                    <h2 className='title'>{item.title}</h2>
                                    <p className='description'> {item.description}</p>
                                    <a className='newsLink' target="_blank" rel="noopener noreferrer"  href={item.link}>{item.link}</a>       
                                    <p className='published'>{ item.pubDate }</p>  
                                </Col>
                            </Row>
                        </div>
                    )} 
                    <hr />
                </Grid>
            </div> 
        )
    }
}

// export default NewsItem
