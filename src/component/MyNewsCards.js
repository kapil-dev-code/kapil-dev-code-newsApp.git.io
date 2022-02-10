import React from "react";

export default function MyNewsCards(props) {
  const { title, description, url, urlToImage, dateAndTime, author, source } =
    props;
  return (
    <div>
      <div className="card">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ zIndex: 1, right: "-15%" }}
        >
          {source}
        </span>
        <img
          src={urlToImage}
          className="card-img-top img-fluid"
          alt="no-img-found"
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a
            rel="noopener noreferrer"
            href={url}
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
          <p className="card-text">
            <small className="text-muted">
              Last updated By {!author ? "unknown" : author} at{" "}
              {new Date(dateAndTime).toGMTString()}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}
