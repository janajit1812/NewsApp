import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, time, source } = this.props;
    // We can directly use the props also by calling this.props.title, this.props.description, this.props.imageUrl, this.props.newsUrl. Then the above declaration will not be required, whrere we store the prop values.
    return (
      <div className='my-3' style={{ width: '18rem' }}>
        <div className="card">
          <div style={{display: "flex", justifyContent:"flex-end", position:"absolute", right:"0"}}>
            <span className="badge rounded-pill bg-danger">
              {source.name}
              <span className="visually-hidden">unread messages</span>
            </span>
          </div>
          <img src={!imageUrl ? "https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg" : imageUrl} className="card-img-top" alt="/" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {author} on {time.toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem


