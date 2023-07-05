import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  //Sequence of execution = constructor -> rener -> mount 
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=da1cf4440d754f2c9c76fad09b779f49&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData)
    this.setState({ articles: parseData.articles, totalResults: parseData.totalResults })
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=da1cf4440d754f2c9c76fad09b779f49&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData)
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles
    })

  }

  handleNextClick = async () => {
    if (Math.ceil(this.state.totalResults/20) < this.state.page +1 ) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=da1cf4440d754f2c9c76fad09b779f49&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parseData = await data.json()
      console.log(parseData)
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles
      })
    }

  }

  render() {
    return (
      <div className="container my-3">
        <p><strong>NewsMonkey</strong> Today's Headlines : Get latest and Breaking News on Politics, Business, Lifestyle, Entertainment and Sports along with News updates from around the world.</p>

        <div className="row">
          {this.state.articles.map((element) => {
            return <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} newsurl={element.url} />
            </div>
          })}
        </div>
        <div className="d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={Math.ceil(this.state.totalResults/20) < this.state.page +1 } type="button" className="btn btn-outline-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>

      </div>
    )
  }
}

export default News


//DID MOUNT ?
// We have a function called componentDidMount(), which is used in a React component to do something when the component is shown on the screen.
// In the code, we have a URL that points to a website where we can get news headlines. We want to fetch the news data from that URL.
// We use the fetch() function to send a request to the URL and get the news data. It's like asking the website for the news.
// The await keyword is used to wait for the response from the website. It's like patiently waiting for the website to give us the news.
// Once we get the response (the news data) from the website, we use the json() method to convert it into a format that our program can understand.
// We use the await keyword again to wait for the conversion to finish.
// Finally, we print the converted news data to the console using console.log(). It's like showing the news on the screen for us to see.