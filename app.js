let App = () =>(
    <div>
        <h2>My Grocery List</h2>
        <GroceryList groceryList={['Carrot', 'Tofu']}/>
    </div>
);

var GroceryList = (props) => (
    <ul>
        {props.groceryList.map((item) => <GroceryListItem key={item.toString()} item={item} />)}
    </ul>
)

class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            crossed: false
        }
    }

    onListItemClick(){
        this.setState((prevState) =>({
            crossed: !prevState.crossed
        }));
    }

    render() {
        let style = {
            textDecoration: this.state.crossed ? 'line-through' : 'none'
        }
        return (<li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>);
    }
}

ReactDOM.render(<App />, document.getElementById("app"));