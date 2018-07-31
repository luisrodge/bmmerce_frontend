import React from 'react';

const WAIT_INTERVAL = 400;
const ENTER_KEY = 13;

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
        };
    }
    componentWillMount() {
        this.timer = null;
    }

    handleChange = (e) => {
        clearTimeout(this.timer);
        this.setState({ query: e.target.value });
        this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);
    }

    handleKeyDown = (e) => {
        if (e.keyCode === ENTER_KEY) {
            this.triggerChange();
        }
    }

    triggerChange = () => {
        const { query } = this.state;
        console.log(query);
        this.props.onSearch(query);
    }

    render() {
        return (
            <input
                className="form-control simple-input search-form form-control-lg"
                placeholder="What are you looking for?"
                onChange={(e) => this.handleChange(e)}
                onKeyDown={(e) => this.handleKeyDown(e)} />
        );
    }
}

export default SearchForm;