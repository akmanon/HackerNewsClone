import React, { Component } from 'react';
import List from "../List";
import Spinner from "../Spinner";
import { getTopStories } from "../ApiPromise";

class Top extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true
        }
    }
    componentDidMount() {
        console.log(this.state.loading)
        getTopStories()
            .then((res) => {
                this.setState({
                    data: res,
                    loading: false,
                })
                console.log(this.state)
            }).catch((error) => { console.log(error) })
    }
    render() {
        return (
            <React.Fragment>
                {
                    this.state.loading ? <Spinner />
                        : this.state.data.map((id, i = 0) => <List data={id} key={id.id} index={++i} />)
                }
            </React.Fragment>
        );
    }
}

export default Top;