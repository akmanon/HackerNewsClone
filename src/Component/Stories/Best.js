import React, { Component } from 'react';
import { getBestStories } from "../ApiPromise";
import List from "../List";

class Best extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }
    componentDidMount() {

        getBestStories()
            .then((res) => {
                this.setState({
                    data: res,
                })
                console.log(this.state.data)
            }).catch((error) => { console.log(error) })
    }
    render() {
        return (
            <React.Fragment>
                {
                    this.state.data.map((id, i = 0) => <List data={id} key={id.id} index={++i} />)
                }
            </React.Fragment>
        );
    }
}

export default Best;