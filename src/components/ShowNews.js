import { Component } from 'react';

class ShowNews extends Component {
    render() {
        return (
            <div className="news">
                <h3><a href={"/?id=" + this.props.id}>{this.props.tieude}</a></h3>
                <p>{this.props.mota}</p>
            </div>
        )
    }
}

export default ShowNews