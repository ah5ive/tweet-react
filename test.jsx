class List extends React.Component {
    render() {
        return (
          <ul>
            <li>Hello world</li>
          </ul>
        );
    }
}

ReactDOM.render(
    <List />,
    document.getElementById('root')
);