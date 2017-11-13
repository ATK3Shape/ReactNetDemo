//const React = require('react');
import React from 'react';

class Comment extends React.Component {
    constructor(props) {
        super(props);

        this.rawMarkup = this.rawMarkup.bind(this);
    }

    rawMarkup () {
        const md = new Remarkable();
        let rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup };
    }

    render () {
        return (
          <div className="comment">
            <h2 className="commentAuthor">
              {this.props.author}
            </h2>
            <span dangerouslySetInnerHTML={this.rawMarkup()} />
        </div>
      );
    }
};

module.exports = Comment;
