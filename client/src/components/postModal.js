import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import { connect } from 'react-redux';
import { addPosts } from '../actions/postActions';
import PropTypes from 'prop-types';


class PostModal extends Component {
    state = {
        modal: false,
        title: '',
        post: ''
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const newPost = {
            title: this.state.title,
            post: this.state.post
        }

        // add post via addPost action
        this.props.addPosts(newPost);

        // Close modal
        this.toggle();
    }

    render(){
        return (
            <div>
                { this.props.isAuthenticated ?
                    <Button
                        color="dark"
                        style={{marginBottom: '2rem'}}
                        onClick={this.toggle}
                    >
                        Add Post
                    </Button> : <h4 className="mb-3 ml-4">Please login to manage posts</h4>
                }

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>
                        Add To Posts
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                           <FormGroup>
                                <Label for="post"> 
                                    <Input 
                                        type="text"
                                        name="title"
                                        placeholder="Add title"
                                        onChange={this.onChange}
                                    />
                                </Label>
                                <Input 
                                    type="text"
                                    name="post"
                                    placeholder="Add shopping item"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >
                                    Add Post
                                </Button>
                           </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    post: state.post,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addPosts })(PostModal);