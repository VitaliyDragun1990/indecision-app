class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        };
        this.text = 'Hey. These are some details you can now see!';
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }

    handleToggleVisibility() {
        this.setState((prevState) => ({visibility: !prevState.visibility}));
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && <p>{this.text}</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));