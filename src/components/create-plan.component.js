import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class EditPlan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            username: "",
            description: "",
            date: new Date(),
            guestsAmount: 0,
        };

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeGuestsAmount = this.onChangeGuestsAmount.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({
            users: ["development user"],
            username: "development user",
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
    onChangeDate(date) {
        this.setState({
            date: date,
        });
    }
    onChangeGuestsAmount(e) {
        this.setState({
            guestsAmount: e.target.value,
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const weddingPlan = {
            username: this.state.username,
            description: this.state.description,
            date: this.state.date,
            guestsAmount: this.state.guestsAmount,
        };
        console.log(weddingPlan);
        window.location = "/";
    }

    render() {
        return (
            <div className="container">
                <h3 className="title">Create a new Wedding Plan</h3>
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

                            <div className="field">
                                <input
                                    type="submit"
                                    value="Create Wedding Plan"
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
