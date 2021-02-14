import React from 'react'
import {compose} from "redux";
import {connect} from "react-redux";

let mapStateToProps = state => ({})

class NewsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {id: 1, name: 'hello_1'},
                {id: 2, name: 'hello_2'},
                {id: 3, name: 'hello_3'},
            ],
            id: 4
        }
    }
    addItem = () => {
        this.setState({ list: [ ...this.state.list, {id: this.state.id, name: `name_${this.state.id}`}], id: this.state.id + 1})
    }
    add = async () => {
        await this.addItem()

    }

    transformName(name) {
        console.log('tramsform name')
        return name + ' !)'
    }

    render() {
        return <div>
            <button onClick={this.add}>Add new item</button>
            id {
            this.state.list.map(item => {
                return <div key={item.id}>{item.id}: {this.transformName(item.name)}</div>
            })
        }

        </div>
    }
}

export default compose(
    connect(mapStateToProps, {})
)(NewsContainer)