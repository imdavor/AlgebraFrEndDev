import { Component } from "react";

export default class ClassComponent extends Component {
    render() {
        console.log(this.props);
        return <p>Ovo je komponenta definirana klasom!</p>;
    }
}
