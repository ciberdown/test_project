import axios from "axios";
import { Component } from "react";
import SingleNew from "./singleNew";
import BasicSelect from "./selectionPart";
import Loading from "./UI/loadingComponent";

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
  state = {
    news: [],
    loading: "Loading...",
  };
  defaultValue = 3;
  componentDidMount() {
    this.getData(urls[this.defaultValue]);
  }

  getDataWithSelection = (number) => {
    this.setState({
      loading: "Loading...",
      news: [],
    });
    this.getData(urls[number]);
  };
  async getData(url) {
    try {
      const res = await axios.get(url);
      //console.log(res.data.articles);
      res.data.articles.length === 0
        ? this.setState({ loading: "zero news" })
        : this.setState({ news: res.data.articles });
    } catch (error) {
      this.setState({ loading: "network error!" });
      console.log(error);
    }
  }

  removeElement = (e) => {
    const idx = parseInt(e.target.id);
    const myNews = this.state.news.filter((item, index) => index !== idx);
    this.setState({ news: myNews });
    if (myNews.length === 0) this.setState({ loading: "no New found" });
  };
  addElement = (e) => {
    const rnd = Math.floor(Math.random() * this.state.news.length - 1);
    const myNew = this.state.news[rnd];
    this.setState({ news: [myNew, ...this.state.news] });
  };
  render() {
    return (
      <>
        {
          <BasicSelect
            defaultValue={this.defaultValue}
            setURL={this.getDataWithSelection}
          />
        }
        <div className="news" style={styles.news}>
          {this.state.news.length === 0 ? (
            <Loading loading = {this.state.loading}/>
          ) : (
            <SingleNew
              addElement={this.addElement}
              removeHandle={this.removeElement}
              news={this.state.news}
            />
          )}
        </div>
      </>
    );
  }
}
