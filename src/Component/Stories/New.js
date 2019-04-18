import React, { Component } from 'react';
import List from "../List";
import Spinner from "../Spinner";
import { getNewStories } from "../ApiPromise";

class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
        }
    }
    componentDidMount() {
        getNewStories()
            .then((res) => {
                this.setState({
                    data: res,
                    loading: false,
                })
                console.log(this.state.data)
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

export default New;