import React, { Component } from 'react';
import { getBestStories } from "../ApiPromise";
import Spinner from "../Spinner";
import List from "../List";

class Best extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
        }
    }
    componentDidMount() {

        getBestStories()
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

export default Best;