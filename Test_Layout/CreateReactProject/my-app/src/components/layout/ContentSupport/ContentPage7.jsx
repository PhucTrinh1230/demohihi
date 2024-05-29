import 'bootstrap/dist/css/bootstrap.min.css';
import './ContentPage7.css'
import Btn from '../../common/ButtonSupport';
import { Link, NavLink } from 'react-router-dom';

const ContentPage7 = () => {
    return (
        <div className='wrapper'>
            <h3>Hướng dẫn tạo tài khoản</h3>
            <h5>Bước 1:</h5>
            <p>Ở giao diện trang chủ Steam Shop, click vào <strong>Đăng kí</strong></p>
            <img className='img1' src='https://help.divineshop.vn/~gitbook/image?url=https%3A%2F%2F532840585-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M3-IU1k8a0MMGt6Gmx-%252Fuploads%252FQ8Omd6Ll2zH7OR81p4o4%252Fimage.png%3Falt%3Dmedia%26token%3D2b71d0e2-b9ee-480f-bf30-22b251d1bcdc&width=768&dpr=4&quality=100&sign=868c60d16f4b0f41bc9f247df40f1e6352376570e0eccb467cdc2beff9eb6781' alt='dangkibuoc1' />
            <br></br>
            <br></br>
            <h5>Bước 2:</h5>
            <p>Điền đầy đủ các thông được yêu cầu:<strong>Đăng kí</strong></p>
            <img className='img2' src='https://help.divineshop.vn/~gitbook/image?url=https%3A%2F%2F532840585-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M3-IU1k8a0MMGt6Gmx-%252Fuploads%252FsAqATZluXbA8BXtLIlfC%252FImage%2520114.png%3Falt%3Dmedia%26token%3Ded805958-09d8-4b2c-b805-2833e7fd1d5a&width=768&dpr=4&quality=100&sign=e9946c0aad4a849ed239038a8a836c7da3c9d367b9c9ec29efb6f26e5840b24d' alt='dangkibuoc2' />
            <br></br>
            <br></br>

            <div class="p-2 m-2 bg-danger bg-opacity-10 border border-danger border-start-1 rounded-end thongtin">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-lg" viewBox="0 0 16 16">
                    <path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0zM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
                </svg>
                Lưu Ý: <br></br>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                </svg>
                <strong>Tên đăng nhập (Username) </strong> viết liền không dấu, không chứa kí tự đặc biệt. Nên viết dễ đọc dễ nhớ vì nó sẽ nằm trong chú pháp nạp tiền để thanh toán tại Shop.<br></br>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                </svg>
                <strong>Email </strong>điền chính xác, vì các sản phẩm key game cũng như các thông báo qua trọng sẽ được Shop gửi qua email tới khách hàng.
            </div>
            <br></br>
            <br></br>

            <h5>Bước 3:</h5>
            <p>Click vào nút <strong>Tạo tài khoản. </strong> Nếu thông tin bạn điền là chính xác và chưa tồn tại trên hệ thống, bạn sẽ được chuyển đến trang chủ. </p>
            <strong>Như vậy là bạn đã tạo tài khoản thành công và sẵn sàng mua hàng rồi đó.</strong>
            <div class="p-3 m-3 bg-info bg-opacity-10 border border-info border-start-1 rounded-end thongtin">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-lg" viewBox="0 0 16 16">
                    <path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0zM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
                </svg>
                Ngoài ra nếu có sẵn tài khoản <strong> Google hoặc Facebook </strong>bạn có thể <strong>Đăng nhập/Đăng kí</strong> thông qua 2 mạng xã hội trên thông qua các nút dưới phần <strong>Đăng nhập qua MXH</strong>
            </div>
            <Btn/>
        </div>
    )

}
export default ContentPage7