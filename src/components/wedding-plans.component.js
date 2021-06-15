import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const WeddingPlan = (props) => (
    <tr>
        <td>{props.weddingPlan.username}</td>
        <td>{props.weddingPlan.description}</td>
        <td>{props.weddingPlan.date.substring(0, 10)}</td>
        <td>{props.weddingPlan.guestsAmount}</td>
        <td>
            <Link to={"/edit/" + props.weddingPlan._id}>Edit</Link> |{" "}
            <a
                href="#"
                onClick={() => {
                    props.deleteWeddingPlan(props.weddingPlan._id);
                }}
            >
                Delete
            </a>
        </td>
    </tr>
);

export default class WeddingPlans extends Component {
    constructor(props) {
        super(props);
        this.deleteWeddingPlan = this.deleteWeddingPlan.bind(this);
        this.state = { weddingPlans: [] };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/weddingPlans/")
            .then((response) => {
                this.setState({ weddingPlans: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    weddingPlans() {
        return this.state.weddingPlans.map((currentPlan) => {
            return (
                <WeddingPlan
                    weddingPlan={currentPlan}
                    deleteWeddingPlan={this.deleteWeddingPlan}
                    key={currentPlan._id}
                />
            );
        });
    }

    deleteWeddingPlan(id) {
        axios
            .delete("http://localhost:5000/weddingPlans/" + id)
            .then((res) => console.log(res.data));
        this.setState({
            weddingPlans: this.state.weddingPlans.filter((el) => el._id !== id),
        });
    }

    render() {
        return (
            <div className="container">
                <h3 className="title">Wedding Plans</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Guests amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>{this.weddingPlans()}</tbody>
                </table>
            </div>
        );
    }
}
