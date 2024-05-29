import 'bootstrap/dist/css/bootstrap.min.css';
import './ContentPage8.css'
import Btn from '../../common/ButtonSupport';
import { Link, NavLink } from 'react-router-dom';

const ContentPage8 = () => {
    return (
        <div className='wrapper'>
            <h3>Hướng dẫn nạp tiền</h3>
            <strong>Để có thể nạp Dcoin vào tài khoản bạn có thể làm theo hướng dẫn dưới đây:</strong>
            <p>  1.Bạn có thể click vào ô <strong>Nạp thêm</strong> theo ảnh dưới đây</p>
          
            <img className='img1' src='https://help.divineshop.vn/~gitbook/image?url=https%3A%2F%2F532840585-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M3-IU1k8a0MMGt6Gmx-%252Fuploads%252FxChmplTWa3UKhPiO3bIt%252FImage%2520121.png%3Falt%3Dmedia%26token%3Dd4c86bbd-341f-4f3a-8039-6ec2202ad6c6&width=768&dpr=4&quality=100&sign=f353587b94da21951a4878d774acae8ef799ea635098080ded478b438c8dae16' alt='naptienhuongdan' />
        <br></br>
            <span>  2. Hoặc bạn có thể click thẳng vào đường link sau: https://divineshop.vn/topup</span>
            <br></br>
            <br></br>
            <span>    3. Sau đó, bạn hãy chọn 1 hình thức thanh toán phù hợp với mình. Hiện tại, Divineshop đang có các hình thức thanh toán sau:</span>
            <br></br>   
            <br></br>
            <img  className='img2' src='https://help.divineshop.vn/~gitbook/image?url=https%3A%2F%2F532840585-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M3-IU1k8a0MMGt6Gmx-%252Fuploads%252Fg3p8xrGphAxlwyDl6eTU%252Fimage.png%3Falt%3Dmedia%26token%3D8462fdc0-b6e8-4dd1-8363-92d162bca95b&width=768&dpr=4&quality=100&sign=03e01a612c1203a8705b393221d0558aa1d46ea876f389a9473769239e0de644' alt='hinhthucthanhtoan'></img> 


            <Btn/>
        </div>
    )

}
export default ContentPage8