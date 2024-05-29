import 'bootstrap/dist/css/bootstrap.min.css';
import './ContentPage3.css'
import Btn from '../../common/ButtonSupport';
import { Link, NavLink } from 'react-router-dom';
 
const ContentPage3 = () => 
{
    return (
       <div className='wrapper'>
        <h3>Hệ thống Fanpage chính thức </h3>
        <h5>Dưới đây là thông tin các Fanpage chính thức của Steam </h5>
        <br></br>
        <p><strong>1. Steam Shop - Game bản quyền</strong> </p>
        <Link to='https://www.facebook.com/divineshop.vn'>https://www.facebook.com/steamshop.vn</Link>
        <p></p>
        <p><strong>2. Steam Shop - Phim bản quyền</strong> </p>
        <Link to='https://www.facebook.com/divineshop.vn'>https://www.facebook.com/steamshop.vn.xemphim</Link>
        <p></p>
        <p><strong>3. Steam Shop - Nghe nhạc bản quyền</strong> </p>
        <Link to='https://www.facebook.com/divineshop.vn'>https://www.facebook.com/steamshop.vn.nghenhac</Link>
        <p></p>
        <p><strong>4. Steam Shop - Phần mềm bản quyền</strong> </p>
        <Link to='https://www.facebook.com/divineshop.vn'>https://www.facebook.com/steamshop.phanmem</Link>
        <p></p>
        <p><strong>5. Steam News</strong> </p>
        <Link to='https://www.facebook.com/divineshop.vn'>https://www.facebook.com/steamnews.vn</Link>
        <p></p>
        <p><strong>6. Đảo Steam</strong> </p>
        <Link to='https://www.facebook.com/divineshop.vn'>https://www.facebook.com/daosteam.vn</Link>
        <p></p>
        <Btn/>
       </div>
       
    )
    
}
export default ContentPage3;