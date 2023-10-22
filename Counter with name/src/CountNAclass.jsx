import React from "react";

class CountNAclass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: " ",
            age: 0,
        };
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={(a) => this.setState({ name: a.target.value })}
                />
                <br />
                <br />
                <button
                    onClick={() =>
                        this.setState((currentAge) => ({
                            age: currentAge.age + 1
                        }))
                    }
                >
                    +
                </button>
                <h1>{this.state.age}</h1>
                <button
                    onClick={() =>
                        this.setState((currentAge) => ({
                            age: currentAge.age - 1
                        }))
                    }
                >
                    -
                </button>

                <h1>
                    My name is {this.state.name} and I am {this.state.age} years old
                </h1>
            </div>
        );
    }
}

export default CountNAclass;
