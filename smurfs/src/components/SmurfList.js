import React from 'react'
import { connect } from 'react-redux'
import { getSmurfs } from '../actions'
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
        this.setState({
            ...this.state.newSmurf,
            [e.target.name]: e.target.value

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
                        onChange={this.onChange}
                    />
                    <input 
                        type="number"
                        name="age"
                        value={this.state.newSmurf.name}
                        onChange={this.onChange}
                    />
                    <input 
                        type="number"
                        name="height"
                        value={this.state.newSmurf.name}
                        onChange={this.onChange}
                    />
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
    { getSmurfs }
)(SmurfList)