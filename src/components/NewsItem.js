import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
      let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
      return (
        <div className='container my-3'>
          <div className="card">
              <span className={`position-absolute top-0 translate-middle badge rounded-pill bg-danger`}style={{left: '90%', zIndex: 1 }}>{source}</span>
              <img src={!imageUrl?"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/WhatsApp_Image_2022-08-24_at_6-647x363.jpeg?ppkuMDn1OgqAI0t3UioKf7SODaZ2syf5":imageUrl} className="card-img-top" alt="..."/>
              <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                  <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
              </div>
          </div>
        </div>
      )
    }
}

export default NewsItem