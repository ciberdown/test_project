import { Component } from "react";
import Button from "@mui/material/Button";
import Card from "./card";

const styles = {
  single: {
    fontFamily: "sans-serif",
    border: "1px solid gray",
    padding: "10px",
    borderRadius: "10px",
  },
  names: {
    fontWeight: "bolder",
    fontFamily: "fantasy",
    margin: "10px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    gap: "20px",
  },
  titles: {
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imgs: {
    display: "block",
    width: "300px",
    height: "auto",
    borderRadius: "10px",
  },
  des: { display: "flex", gap: "30px", padding: "20px" },
};
export default class SingleNew extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.news.map((item, index) => {
      return (
        <section key={index} style={styles.single}>
          {/* <Card title={item.title} link={item.link} imgURL={item.urlToImage} description={item.description}/> */}
          <>{this.renderTitles(item.title, index)}</>
          <>
            {this.renderDiscription(
              item.description,
              item.url,
              item.urlToImage
            )}
          </>
          <>{this.renderNames(item.author)}</>
          {/* <hr style={{ color: "black", backgroundColor: "black" }} /> */}
        </section>
      );
    });
  }

  renderNames(author) {
    return <div style={styles.names}>{author}</div>;
  }

  renderTitles(title, index) {
    return (
      <div style={styles.titles}>
        "{title}"<Button id={index} onClick={this.props.removeHandle} variant="contained">Remove</Button><Button id={index} onClick={this.props.addElement}>add</Button>
      </div>
    );
  }
  renderDiscription(des, url, imageUrl) {
    return (
      <section style={styles.des}>
        {" "}
        <img style={styles.imgs} src={imageUrl} />
        <div>
          {des}
          <br />
          <a href={url}>learn more</a>
        </div>
      </section>
    );
  }
}
