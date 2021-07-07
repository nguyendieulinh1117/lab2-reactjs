import { Component } from 'react'
import ShowNews from './ShowNews'

class PopularNews extends Component {
    render() {
        var elements = this.props.arrNews.map((news, index) => {
            return (
                <ShowNews key={news.idTin}
                    id={news.idTin}
                    tieude={news.TieuDe}
                    mota={news.TomTat} />
            )
        })
        return (
            <div>{elements}</div>
        )
    }
}

export default PopularNews