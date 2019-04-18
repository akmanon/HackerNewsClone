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
        getTopStories()
            .then((res) => {
                this.setState({
                    data: res,
                    loading: false,
                })
            }).catch((error) => { console.log(error) })
    }
    render() {
        return (
            <React.Fragment>
                {
                    this.state.loading && (this.state.data.length === 0) ? <Spinner />
                        : this.state.data.map((id, i = 0) => <List data={id} key={id.id} index={++i} />)
                }
            </React.Fragment>
        );
    }
}

export default Top;