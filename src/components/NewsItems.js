import React from 'react'

const NewsItems =(props)=> {

    let {title, describtion, imageurl, url, author, date, source} = props;
    return (
      <div>
      <div className="my-3 ">
          <div className="card shadow p-3 mb-5 bg-white rounded">
      <div style={{display: 'flex', justifycontent: 'flex-end' ,position: 'absolute', right: '0'}}>
        <span className="badge rounded-pill bg-danger">
                {source}
        </span>
      </div>
            <img src={!imageurl?"https://media.istockphoto.com/id/822376834/photo/indian-news-concept-microphone-news-on-the-map-of-india-3d-rendering.jpg?s=612x612&w=0&k=20&c=xcXT9ilIu_7AYBQy8pNxg4ts0WcJt-ntSj_Z8LIqxR8=":imageurl} 
            className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{describtion}...</p>
              <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
              <a href={url} target='_blank' className="btn btn-sm btn-primary">Read more</a>
            </div>
        </div>
        </div>
      </div>
    )
  
}

export default NewsItems
