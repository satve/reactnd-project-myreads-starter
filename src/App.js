import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './bookshelf.js';
import EachBook from './EachBook.js';
import SearchBook from './searchBook.js';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {

    searchBooks: "",
    books: [],
    showSearchPage: false
  }

  handleChangesearch = (e) => {
    this.setState({
      searchBooks: e.target.value
    })
  }
  
  componentDidMount() {
     this.getBooks();
   }


  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }
  
  update = (nBook, nShelf) => {
    BooksAPI.update(nBook, nShelf).then(response =>{
    nBook.shelf = nShelf
      var updatebooks = this.state.books.filter(book => book.id !== nBook.id)
        updatebooks.push(nBook);
      this.setState({books: updatebooks})
    })
  }

  createBook = () => {
    this.setState((previousState) => {
      return {
        books: [...previousState.books, {searchBooks: previousState.searchBooks}],
        searchBooks: ""
      }
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input onChange = {this.handleChangesearch} type="text" placeholder="Search by title or author" value = {this.state.getBooks}/>
              </div>
            </div>
              <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
    <div className="list-books">
    <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
        <div className="list-books-content">
          </div>
            <BookShelf/>
              <div className="open-search">
                <a onClick={() => this.setState({ showSearchPage: true , })}>Add a book</a>
              </div>
            </div>
          )}
      
    {this.state.books.map((book) => {
        return ( 
          <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
              <div className="book-shelf-changer">
                <select>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
                <div className="book-title">{book.title}</div>
               <div className="book-authors">{book.authors}</div>
            </div>
          )}
        )}
      </div>
    )
  }
}

export default BooksApp
