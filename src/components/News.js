import React, {Component} from 'react'
import NewsItem from './NewsItem'
import './News.css'

import { bbcRssFeedURL } from './config'


export default class News extends Component {
    state = {
        newsitems: [],
        isLoading: false
    }


    getBBCrssFeeds = () => {
        this.setState({isLoading: true, newsitems: []})
        fetch(bbcRssFeedURL)
        .then(response => response.text())
        .then(data => {
           this.setState({isLoading: false})
            let parser = new DOMParser();
            let xmlFeed = parser.parseFromString(data, 'application/xml');
           // console.log(xmlFeed);
            let newsItemList =  xmlFeed.getElementsByTagName('item');
            let ItemsList = []
           for (let i=0; i<newsItemList.length; i++) {
         
             for (let j=0; j<newsItemList[i].children.length; j++) {
                    const tagName = newsItemList[i].children[j].tagName;
                    const text = newsItemList[i].children[j].textContent;
                    if (tagName !=='guid' && tagName !=='media:thumbnail') {
                     ItemsList.push({[tagName] : text})
                    }
             }  

             this.setState({
                newsitems: [...ItemsList, ItemsList]
             })
            }
           // console.log(this.state.newsitems)
        }).catch((error) => console.error('Fetch error getBBCrssFeeds method:', error))
    }

    componentDidMount() {
        this.getBBCrssFeeds();
    }


    render() {
        return (
            <div className='news'>
                { this.state.isLoading ? <h1 style={{textAlign: 'center', color: 'maroon', fontFamily: 'Helvetica'}}>Loading Latest BBC News items...</h1> : 
                    <div>
                        <NewsItem newsitems={this.state.newsitems} reloadClick={this.getBBCrssFeeds} />
                    </div>
                }
            </div>  
        )
    }
}

