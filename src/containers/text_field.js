import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchQuote } from '../actions';

class TextField extends Component {
  componentDidMount() {
    this.props.fetchQuote();
  }

  onClick(event) {
    event.preventDefault();
    this.props.fetchQuote();
  }

  render() {
    const twitterUrl = `https://twitter.com/intent/tweet?text="${this.props.quote.quote}" -${this.props.quote.author}`;
    
    return(
    <div className="container col-md-6 col-sm-offset-3">
      <div id="quote-box">
        <h4 id="text" className="text-md-center">
            <i className="fa fa-quote-left"></i> {this.props.quote.quote} <i className="fa fa-quote-right"></i>
        </h4>
        <p id="author" className="text-md-right">- {this.props.quote.author}</p>
        <a id="tweet-quote" href={twitterUrl}>
          <button className="btn btn-light tweet-btn">Share 
            <i className="fa fa-twitter"></i>
          </button>
        </a>
        <div className="right-btn">
          <button
            id="new-quote"
            className="btn btn-light btn-xs"
            onClick={this.onClick.bind(this)}>
            Next Quote
          </button>
        </div>
      </div>
    </div>
    );
  }
}

function mapStateToProps({quote}) {
  return { quote };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchQuote }, dispatch);
}

// function mapStateToProps(state) {
//   return {
//     quote: state.quote
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(TextField);