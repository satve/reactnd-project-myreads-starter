import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI'

class BookShelf extends React.Component {
  state = {
      currentlyReading: [],
      wantToRead: [],
      read: []
}
    render()
     { return (

<div>
<div className="bookshelf">
  <h2 className="bookshelf-title">Currently Reading</h2>
  <div className="bookshelf-books">
    <ol className="books-grid">
    <li>  {this.state. currentlyReading.map(( currentlyReading) => {
        return ( 
          <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ currentlyReading.imageLinks.thumbnail})`}}></div>
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
                <div className="book-title">{ currentlyReading.title}</div>
               <div className="book-authors">{ currentlyReading.authors}</div>
            </div>
          )}
        )}</li>
  
    </ol>
  </div>
</div>
<div className="bookshelf">
  <h2 className="bookshelf-title">Want to Read</h2>
  <div className="bookshelf-books">
    <ol className="books-grid">
     <li> {this.state. wantToRead.map(( wantToRead) => {
        return ( 
          <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ wantToRead.imageLinks.thumbnail})`}}></div>
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
                <div className="book-title">{ wantToRead.title}</div>
               <div className="book-authors">{ wantToRead.authors}</div>
            </div>
          )}
        )}</li>
    </ol>
  </div>
</div>
<div className="bookshelf">
  <h2 className="bookshelf-title">Read</h2>
  <div className="bookshelf-books">
    <ol className="books-grid">
    <li>{this.state.read.map(( read) => {
        return ( 
          <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ read.imageLinks.thumbnail})`}}></div>
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
                <div className="book-title">{read.title}</div>
               <div className="book-authors">{read.authors}</div>
            </div>
          )}
        )}</li>
  
    </ol>
  </div>
</div>
</div>
)}
}


export default BookShelf