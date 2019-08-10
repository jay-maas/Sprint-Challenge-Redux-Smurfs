import React from 'react'

export default function Smurf(props) {
    return (
        <React.Fragment>
            {props.smurf.name}
            <li>{props.smurf.age}</li>
            <li>{props.smurf.height}</li>
        </React.Fragment>
    )
}