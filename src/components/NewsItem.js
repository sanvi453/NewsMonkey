import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title, description, imageurl, newsurl} = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageurl?imageurl:"https://img.freepik.com/premium-photo/news-intro-graphic-animation-with-circles-world-map-abstract-background-elegant-luxury-3d-illustration-style-news-business-template_510351-1022.jpg"} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsurl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
