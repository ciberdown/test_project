import axios from "axios";
import { Component } from "react";
import SingleNew from "./singleNew";
import BasicSelect from "./selectionPart";
const urls = [
  "https://newsapi.org/v2/everything?q=apple&from=2023-05-12&to=2023-05-12&sortBy=popularity&apiKey=951549abbc764ab284db9ac5ad0c7026",
  "https://newsapi.org/v2/everything?q=tesla&from=2023-04-13&sortBy=publishedAt&apiKey=951549abbc764ab284db9ac5ad0c7026",
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=951549abbc764ab284db9ac5ad0c7026",
  "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=951549abbc764ab284db9ac5ad0c7026",
  "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=951549abbc764ab284db9ac5ad0c7026",
];
const styles = {
  news: {
    padding: "20px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr)",
    gridAutoRows: "auto",
    rowGap: 20,
    columnGap: 40,
  },
};
export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      url: urls[3],
      loading: "Loading...",
    };
    this.setNews = this.setNews.bind(this);
    this.getDataWithSelection = this.getDataWithSelection.bind(this);
  }
  componentDidMount() {
    this.getData();
  }
  componentDidUpdate() {
    console.log("updated");
  }
  setNews(newsList) {
    this.setState({
      news: newsList,
    });
  }
  getDataWithSelection(number) {
    this.setState({
      url: urls[number],
      loading: "Loading...",
      news: [],
    });
    this.getData();
  }
  setLoading = (str) => {
    this.setState({
      loading: str,
    });
  };
  async getData() {
    try {
      const res = await axios.get(this.state.url);
      console.log(res.data.articles);
      res.data.articles.length === 0
        ? this.setLoading("not found")
        : this.setNews(res.data.articles);
    } catch (error) {
      this.setLoading("not found");
      console.log(error);
    }
  }
  removeElement = (e) => {
    const idx = e.target.id;
    this.setState((states) => {
      const news = states.news;
      news.splice(idx, 1);
      return { news };
    });

  };

  render() {
    return (
      <>
        {<BasicSelect setURL={this.getDataWithSelection} />}
        <div className="news" style={styles.news}>
          {this.state.news.length === 0 ? (
            <div>{this.state.loading}</div>
          ) : (
            <SingleNew
              removeHandle={this.removeElement}
              news={this.state.news}
            />
          )}
        </div>
      </>
    );
  }
}
