const React = require('react');
const Comment = require('./Comment');

class CommentList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let commentNodes = this.props.data.map(function (comment) {
            return (
                <Comment author={comment.Author} key={comment.Id}>
                    {comment.Text}
                </Comment>
            );
        });

        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
}

module.exports = CommentList;