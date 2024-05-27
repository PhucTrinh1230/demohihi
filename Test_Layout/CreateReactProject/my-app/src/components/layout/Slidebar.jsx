import './Slidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const Slidebar = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className="slidebar ">
                    {/* <div class="list-group">
                    <button type="button" class="list-group-item list-group-item-action active">
                        Lý do nên mua game bản quyền
                    </button>
                    <button type="button" class="list-group-item list-group-item-action">A second button item</button>
                    <button type="button" class="list-group-item list-group-item-action">A third button item</button>
                    <button type="button" class="list-group-item list-group-item-action">A fourth button item</button>

                </div> */}

                    <div className="panel panel-primary" id="result_panel">
                    <h4 className='panel-title'>Tài liệu hướng dẫn</h4>
                        <div className="panel-body">
                            <ul className="list-group">
                                <li className="list-group-item"><strong>GIỚI THIỆU</strong>
                                </li>
                                <nav>
                                <Link to='/'>Vi Sao nen mua game ban quyen tai Steam</Link>
                                <Link to='/support2'>Khong gian lam viec</Link>
                                <Link to='/'>Vi Sao nen mua game ban quyen tai Steam</Link>
                                <Link to='/'>Khong gian lam viec</Link>
                                <Link to='/'>Vi Sao nen mua game ban quyen tai Steam</Link>
                                <Link to='/'>Khong gian lam viec</Link>
                                </nav>
                              
                                <li className="list-group-item"><strong>HƯỚNG DẪN MUA HÀNG</strong>
                                </li>
                               <nav>
                                <Link to='/'>Khong gian lam viec</Link>
                                <Link to='/'>Vi Sao nen mua game ban quyen tai Steam</Link>
                                <Link to='/'>Khong gian lam viec</Link>
                                </nav>
                                <li className="list-group-item"><strong>BẢO HÀNH</strong>
                                </li>
                                <nav>
                                <Link to='/'>Khong gian lam viec</Link>
                                </nav>
                                <li className="list-group-item"><strong>CÂU HỎI THƯỜNG GẶP</strong>
                                </li>
                                <nav> <Link to='/'>Khong gian lam viec</Link></nav>




                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
export default Slidebar;