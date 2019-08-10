import React from 'react'
import { connect } from 'react-redux'
import { getSmurfs, addSmurf } from '../actions'
import Smurf from './Smurf'

class SmurfList extends React.Component {
    state = {
        newSmurf: {
            name: '',
            age: '',
            height: ''
        }
    }
    componentDidMount() {
        this.props.getSmurfs()
    }
    handleChanges = e => {
        this.setState({ newSmurf: {
            ...this.state.newSmurf,
            [e.target.name]: e.target.value
        }})
    }
    addSmurf = e => {
        e.preventDefault()
        this.props.addSmurf(this.state.newSmurf)
        this.setState({
            newSmurf: {
                name: '',
                age: '',
                height: ''
            }
        })
    }
    render() {
        return (
            <React.Fragment>
                <p>Smurf List:</p>
                {this.props.smurfs && this.props.smurfs.map((smurf, i)=> <Smurf key={i} smurf={smurf} />)}
                {this.props.fetchingSmurfs && <p>Loading Smurfs...</p>}
                {this.props.error && <p>{this.props.error}</p>}
                <form>
                    <input 
                        type="text"
                        name="name"
                        value={this.state.newSmurf.name}
                        onChange={this.handleChanges}
                        placeholder="name"
                    />
                    <input 
                        type="number"
                        name="age"
                        value={this.state.newSmurf.age}
                        onChange={this.handleChanges}
                        placeholder="age"
                    />
                    <input 
                        type="text"
                        name="height"
                        value={this.state.newSmurf.height}
                        onChange={this.handleChanges}
                        placeholder="height"
                    />
                    <button onClick={this.addSmurf}>Add Smurf</button>
                </form>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
})

export default connect(
    mapStateToProps,
    { getSmurfs, addSmurf }
)(SmurfList)