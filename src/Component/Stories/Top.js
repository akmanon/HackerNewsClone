import React, { Component } from 'react';
import List from "../List";
import { getTopStories } from "../ApiPromise";

class Top extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }
    componentDidMount() {

        getTopStories()
            .then((res) => {
                this.setState({
                    data: res,
                })
                console.log(this.state.data)
            }).catch((error) => { console.log(error) })
    }
    render() {
        return (
            <div>
                {
                    this.state.data.map((id) => <List data={id} key={id.id} />)
                }
            </div>
        );
    }
}

export default Top;