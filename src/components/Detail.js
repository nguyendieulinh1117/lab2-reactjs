import { Component } from 'react'

class DetailNews extends Component {
    constructor() {
        super();
        this.state = { hienYk: false }
    }
    doiState = () => {
        this.setState(prevState => ({ hienYk: !prevState.hienYk }))
    }
    render() {
        var formYk
        if (this.state.hienYk) {
            formYk =
                <form>
                    <h3>Y kien</h3>
                    <input className="form-control" placeholder="Name" />
                    <input className="form-control" placeholder="Yk" />
                    <button type="button">Them y kien</button>
                </form>
        } else {
            formYk = ""
        }
        return (
            <div className="tin">
                <h3>{this.props.tieude}</h3>
                <p>{this.props.mota}</p>
                <div dangerouslySetInnerHTML={{ __html: this.props.noidung }}></div>
                <button type="button" onClick={this.doiState}>{this.state.hienYk === false ? "Them y kien" : "Huy"}</button>
                <hr />
                {formYk}
            </div>
        )
    }
}
export default DetailNews