import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default class EditExercise extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeGuestsAmount = this.onChangeGuestsAmount.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            description: "",
            date: new Date(),
            guestsAmount: 0,
            users: [],
        };
    }

    componentDidMount() {
        axios
            .get(
                "http://localhost:5000/weddingPlans/" +
                    this.props.match.params.id
            )
            .then((response) => {
                this.setState({
                    username: response.data.username,
                    description: response.data.description,
                    date: new Date(response.data.date),
                    guestsAmount: response.data.guestsAmount,
                });
            })
            .catch(function (error) {
                console.log(error);
            });

        axios
            .get("http://localhost:5000/users/")
            .then((response) => {
                this.setState({
                    users: response.data.map((user) => user.username),
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value,
        });
    }

    onChangeGuestsAmount(e) {
        this.setState({
            guestsAmount: e.target.value,
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date,
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            date: this.state.date,
            guestsAmount: this.state.guestsAmount,
        };

        console.log(exercise);

        axios
            .post(
                "http://localhost:5000/weddingPlans/update/" +
                    this.props.match.params.id,
                exercise
            )
            .then((res) => console.log(res.data));

        window.location = "/";
    }

    render() {
        return (
            <div className="container">
                <h3 className="title">Edit the wedding plan</h3>
                <div className="columns">
                    <div className="column is-one-third">
                        <form onSubmit={this.onSubmit}>
                            <div className="field">
                                <label className="label">Username: </label>
                                <div className="control">
                                    <div className="select">
                                        <select
                                            ref="userInput"
                                            required
                                            value={this.state.username}
                                            onChange={this.onChangeUsername}
                                        >
                                            {this.state.users.map(function (
                                                user
                                            ) {
                                                return (
                                                    <option
                                                        key={user}
                                                        value={user}
                                                    >
                                                        {user}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Description: </label>
                                <div className="control">
                                    <input
                                        type="text"
                                        required
                                        className="input"
                                        value={this.state.description}
                                        onChange={this.onChangeDescription}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">
                                    Planned guests amount:{" "}
                                </label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        value={this.state.guestsAmount}
                                        onChange={this.onChangeGuestsAmount}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Date: </label>
                                <div className="control">
                                    <DatePicker
                                        selected={this.state.date}
                                        onChange={this.onChangeDate}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <input
                                    type="submit"
                                    value="Save changes to the wedding plan"
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
