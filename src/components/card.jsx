import card from 'materialize-css';
export default function Card({ title, description, author, imgURL, link }) {
  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src={imgURL} alt="" />
            <span className="card-title">{title}</span>
          </div>
          <div className="card-content">
            <p>{description}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <p>{author}</p>
          </div>
          <div className="card-action">
            <a href="#">{link}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
