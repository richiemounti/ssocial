import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import {getPosts, deletePosts} from '../actions/postActions';
import PropTypes from 'prop-types';

class Posts extends Component {
    static propTypes = {
        getPosts: PropTypes.func.isRequired,
        post: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }
    
    componentDidMount(){
        this.props.getPosts();
    }

    onDeleteClick = (id) => {
        this.props.deletePosts(id);
    };

    render(){
        const { posts } = this.props.post;
        return(
            <Container>

                <ListGroup>
                    <TransitionGroup className="post-list">
                        {posts.map(({_id, title, post}) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    { this.props.isAuthenticated ? 
                                        <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    >
                                       Delete
                                    </Button> : null
                                    }
                                    <ListGroupItemHeading>{title}</ListGroupItemHeading>
                                    <ListGroupItemText>{post}</ListGroupItemText>
                                </ListGroupItem>
                            </CSSTransition>
                        ))};
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    post: state.post,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getPosts, deletePosts }) (Posts);