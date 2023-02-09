import { Component } from "react";

export default class Clock extends Component {
    state = {
        date: new Date(),
    };

    componentDidMount = () => {
        this.IntID = setInterval(() => {
            this.setState({ date: new Date() });
        }, 1000);
    };

    shouldComponentUpdate = (nextProps, nextState) => {
        console.log(nextState);
        if (nextState.date.getSeconds() % 2 == 0) {
            return true;
        }
    };

    // componentDidUpdate = (prevProps, prevState) => {
    //     console.log(prevState.date.getSconds());
    // };

    componentWillUnmount = () => {
        clearInterval(this.IntID);
    };

    render() {
        // dekonstrukcija
        const { date } = this.state;

        return <h1>{date.toLocaleTimeString("hr")}</h1>;
    }
}
