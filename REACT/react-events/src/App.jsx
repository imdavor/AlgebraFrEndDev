import { Component } from "react";
import Button from "./Button";

class App extends Component {
    state = {
        showClock: true,
    };

    toggleClock = () => {
        this.setState({ showClock: !this.state.showClock });
    };

    render() {
        const { showClock } = this.state;

        return (
            <div>
                <Button clickListener={this.toggleClock}>
                    {showClock ? "Ukloni me" : "Prikaži me"}
                </Button>
            </div>
        );
    }
}

export default App;
