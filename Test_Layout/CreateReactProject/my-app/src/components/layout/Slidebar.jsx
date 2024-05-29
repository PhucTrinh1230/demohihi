import './Slidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';
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
                                <NavLink to='/'>Lý do nên mua game bản quyền</NavLink>
                                <NavLink to='/support2'>Giới thiệu Steam Shop</NavLink>
                                <NavLink to='/support3'>Hệ thống Fanpage chính thức </NavLink>
                                <NavLink to='/support4'>Chính sách VIP</NavLink>
                                <NavLink to='/support5'>Điều khoản dịch vụ</NavLink>
                                <NavLink to='/support6'>Chính sách bảo mật</NavLink>
                                </nav>
                              
                                <li className="list-group-item"><strong>HƯỚNG DẪN MUA HÀNG</strong>
                                </li>
                               <nav>
                                <NavLink to='/support7'>Hướng dẫn tạo tài khoản</NavLink>
                                <NavLink to='/support8'>Hướng dẫn nạp tiền</NavLink>
                                <NavLink to='/support9'>Hướng dẫn thanh toán</NavLink>
                                </nav>
                                <li className="list-group-item"><strong>BẢO HÀNH</strong>
                                </li>
                                <nav>
                                <NavLink to='/support10'>Thông tin bảo hành chung</NavLink>
                                </nav>
                                <li className="list-group-item"><strong>CÂU HỎI THƯỜNG GẶP</strong>
                                </li>
                                <nav> <NavLink to='/support11'>Hướng dẫn lấy lại account</NavLink></nav>




                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
export default Slidebar;