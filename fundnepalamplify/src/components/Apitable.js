import React from 'react'

class Apitable extends React.Component {
    render() {
        return (

            <tbody>
                {this.props.results.map(user => (
                    <tr key={user.Id}>
                        <td>{user.Id}</td>
                        <td>{user.Name}</td>
                        <td>{user.Name}</td>
                        <td>{user.Name}</td>
                    </tr>

                ))}

            </tbody>
        )
    }
}

export default Apitable
