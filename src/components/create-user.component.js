import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const newUser = {
            username: this.state.username,
        };

        console.log(newUser);

        axios
            .post("http://localhost:5000/users/add", newUser)
            .then((res) => console.log(res.data));

        this.setState({
            username: "",
        });
    }

    render() {
        return (
            <div className="container">
                <h3 className="title">Create a new user</h3>
                <div className="columns">
                    <div className="column is-one-third">
                        <form onSubmit={this.onSubmit}>
                            <div className="field">
                                <label className="label">Username: </label>
                                <div className="control">
                                    <input
                                        type="text"
                                        required
                                        className="input"
                                        value={this.state.username}
                                        onChange={this.onChangeUsername}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <input
                                    type="submit"
                                    value="Create User"
                                    className="button is-primary"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
