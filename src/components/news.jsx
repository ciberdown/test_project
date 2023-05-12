import axios from "axios";
import { Component } from "react";
import Button from "@mui/material/Button";
const styles={names:{
    fontWeight: "bolder",
    fontFamily: "fantasy",
    margin: "10px",
    marginBottom: "20px",
    display:'flex',
    justifyContent:'end'
  }, titles:{
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imgs:{
    display: "block",
    height: "300px",
    borderRadius: "10px",
  },des:{ display: "flex", gap: "30px", padding: "20px" }
}
export default class News extends Component {
  state = {
    news: [],
  };
  componentDidMount() {
    const url =
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=951549abbc764ab284db9ac5ad0c7026";
    this.getData(url);
  }
  async getData(url) {
    try {
      const res = await axios.get(url);
      console.log(res.data.articles);
      this.setState(() => ({
        news: [...res.data.articles],
      }));
    } catch (error) {
      console.log(error);
    }
  }
  renderNames(author) {
    return (
      <div
        style={styles.names}
      >
        {author}
      </div>
    );
  }

  renderTitles(title) {
    return (
      <div
        style={styles.titles}
      >
        "{title}"<Button variant="contained">Remove</Button>
      </div>
    );
  }
  renderDiscription(des, url, imageUrl) {
    return (
      <section style={styles.des}>
        {" "}
        <img
          style={styles.imgs}
          src={imageUrl}
        />
        <div>
          {des}
          <br />
          <a href={url}>learn more</a>
        </div>
      </section>
    );
  }
  renderNews() {
    return this.state.news.map((item, index) => {
      return (
        <section key={index} style={{ fontFamily: "sans-serif" }}>
          <>{this.renderTitles(item.title)}</>
          <>
            {this.renderDiscription(
              item.description,
              item.url,
              item.urlToImage
            )}
          </>
          <>{this.renderNames(item.author)}</>
          <hr style={{ color: "black", backgroundColor: "black" }} />
        </section>
      );
    });
  }
  render() {
    return (
      <div className="news" style={{ padding: "20px" }}>
        {this.state.news.length === 0 && <div>Loading...</div>}
        {this.renderNews()}
      </div>
    );
  }
}
