import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
    static defaultProps = {
        country: "us",
        pageSize: 4,
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
    }

    async componentDidMount() {
        this.props.setprogress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=1`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setprogress(30);
        let parsedData = await data.json();
        this.props.setprogress(70);
        this.setState({ 
            articles: parsedData.articles, 
            totalResults: parsedData.totalResults, 
            loading: false });
        this.props.setprogress(100);
        //this.newsUpdate();
    }

    // This funtion optimizes the code much more. So we don't have to write the handlePrevClick and handleNextClick functions separately and only updateNews function is enough to handle the operations done separately by the two functions.

    // async newsUpdate() {
    //     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c9ebcd6e712d4d1f9ebc73190ff1fc49&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    //     this.setState({ loading: true });
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
    // }

    // handlePrevClick = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c9ebcd6e712d4d1f9ebc73190ff1fc49&pageSize=${this.props.pageSize}&page=${this.state.page - 1}`;
    //     this.setState({ loading: true });
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: parsedData.articles,
    //         loading: false
    //     });

    //     // This is for the use of newsUpdate funtion for next page functionality
    //     // this.setState({
    //     //     page: this.state.page-1
    //     // }); 
    //     // this.newsUpdate();
    // }

    // handleNextClick = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c9ebcd6e712d4d1f9ebc73190ff1fc49&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`;
    //     this.setState({ loading: true });
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({
    //         page: this.state.page + 1,
    //         articles: parsedData.articles,
    //         loading: false
    //     });

    //     // This is for the use of newsUpdate funtion for next page functionality
    //     // this.setState({
    //     //     page: this.state.page+1
    //     // });
    //     // this.newsUpdate();
    // }


    // Used to fetch data for infinite scroll
    fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        });
    }

    render() {
        return (
            <>
                <h2 className="text-center" style={{ margin: '30px 0px' }}>
                    NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} headlines
                </h2>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">

                            {/* {!this.state.loading && this.state.articles.map((element)=>{
return <div className="col md-3" key={element.url}>
<NewsItem title={element.title?element.title.slice(0,30):""} description={element.description?element.description.slice(0,55):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"Undisclosed"} time={new Date(element.publishedAt)} source={element.source}/>
</div>
})} */}
                            {this.state.articles.map((element) => {
                                return <div className="col md-3" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 30) : ""} description={element.description ? element.description.slice(0, 55) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Undisclosed"} time={new Date(element.publishedAt)} source={element.source} />
                                </div>
                            })}
                        </div>
                    </div>

                </InfiniteScroll>

                {/* <div className="d-flex justify-content-between">
                        <button type="button" disabled={this.state.page <= 1} onClick={this.handlePrevClick} className="btn btn-dark">&lt;- Previous</button>
                        <button type="button" disabled={this.state.page >= (this.state.totalResults / this.props.pageSize)} onClick={this.handleNextClick} className="btn btn-dark">Next -&gt;</button>
                    </div> */}
            </>
        )
    }
}

export default News




