class CounterApp extends React.Component {
    constructor(props) {
        super(props)
        this.incrementar = this.incrementar.bind(this)
        this.decrementar = this.incrementar.bind(this)
        this.resetear = this.incrementar.bind(this)
        
        this.state = {
            count : 0
        }
    }
    incrementar() {
        this.setState
        this.count = this.count + 1;
    }

    decrementar() {
        this.count = this.count - 1;
    }

    resetear() {
        this.count = this.count + 0;
    }



    render() {

        return (<div>
            <h1>Contador</h1>
            <p>{this.state.count}</p>
            <button onClick={this.incrementar}>+</button>
            <button onClick={this.decrementar}>-</button>
            <button onClick={this.resetear}>reset</button>
            </div>)

    }


}
ReactDOM.render(<CounterApp />, document.querySelector('#appRoot'))