import React, { Component } from 'react';
import List from "../List";
import { getNewStories } from "../ApiPromise";

class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        getNewStories()
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

export default New;