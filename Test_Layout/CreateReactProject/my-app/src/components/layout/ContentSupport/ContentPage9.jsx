import 'bootstrap/dist/css/bootstrap.min.css';
import './ContentPage9.css'
import Btn from '../../common/ButtonSupport';
import { Link, NavLink } from 'react-router-dom';

const ContentPage9 = () => {
    return (
        <div className='wrapper'>
            <h3>Hướng dẫn thanh toán</h3>
            <h5>Bước 1:</h5>
            <span>Tìm kiếm và truy cập sản phẩm bạn muốn mua<br></br>

                Nhấn <strong>Mua Ngay</strong> hoặc <strong>Thêm vào giỏ </strong>nếu muốn mua thêm nhiều sản phẩm khác</span>
            <br></br>
            <br></br>
            <img className='img1' src='https://help.divineshop.vn/~gitbook/image?url=https%3A%2F%2F532840585-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M3-IU1k8a0MMGt6Gmx-%252Fuploads%252FQbH4vExLMus2ntZCieIu%252Fimage.png%3Falt%3Dmedia%26token%3D15bb3766-ba98-4519-b88f-aca5c05ae9df&width=768&dpr=1&quality=100&sign=84ed675f6d6cb48a9a0d9daa633c76326692c1fe1e9886ddcb8ff5d915661e6c' alt='thanhtoanbuoc1' />
            <br></br>
            <div class="p-2 m-2 bg-danger bg-opacity-10 border border-danger border-start-1 rounded-end thongtin">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-lg" viewBox="0 0 16 16">
                    <path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0zM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
                </svg>

                <strong>Chú Ý: </strong>
                Một số sản phẩm đặc biệt sẽ cần bạn điền thêm các thông tin cần thiết để Shop có thể xử lý đơn hàng, các bạn cứ điền đủ thông tin nếu sản phẩm có yêu cầu nhé.
            </div>
            <br></br>


            <h5>Bước 2:</h5>
            Sau khi đã chọn được các sản phẩm cần mua, truy cập giỏ hàng để tiến hành thanh toán.
            <br></br>
            <br></br>
            <img className='imgthanhtoanb2' src='https://help.divineshop.vn/~gitbook/image?url=https%3A%2F%2F532840585-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M3-IU1k8a0MMGt6Gmx-%252Fuploads%252F9lcgumcmhUU3PQa9vrzD%252Fimage.png%3Falt%3Dmedia%26token%3D36a223f2-4e0a-438e-9807-3fc637f022ea&width=768&dpr=1&quality=100&sign=e2dbb94fe20ae710e3f59a9ad7d618f199571d20016e2217c86257e7605a3d04' alt='thanhtoanbuoc2'></img>
            <div class="p-2 m-2 bg-primary bg-opacity-10 border border-primary border-start-1 rounded-end thongtin">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-lg" viewBox="0 0 16 16">
                    <path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0zM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
                </svg>

                <strong>Chú Ý: </strong>
                Một số sản phẩm đặc biệt sẽ cần bạn điền thêm các thông tin cần thiết để Shop có thể xử lý đơn hàng, các bạn cứ điền đủ thông tin nếu sản phẩm có yêu cầu nhé.

            </div>
            <br></br>
            <br></br>
            <img className='imgthanhtoanb2' src='https://help.divineshop.vn/~gitbook/image?url=https%3A%2F%2F532840585-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M3-IU1k8a0MMGt6Gmx-%252Fuploads%252FEa81YMJulPhg4VCW2liu%252Fimage.png%3Falt%3Dmedia%26token%3D756b8579-2a6a-41de-bdfc-bfdfdbb811f5&width=768&dpr=1&quality=100&sign=fa25ae7a24bbdbeffc77357cc0a189eb662c366b931c760b1e0e6cfa8302f929' alt='hinhanhthanhtoan3'></img>
            <br></br>
            <p>Nếu tài khoản của bạn không đủ Dcoin để thanh toán, hệ thống sẽ yêu cầu bạn nạp thêm tiền.</p>
            <img className='imgthanhtoan3' src='https://help.divineshop.vn/~gitbook/image?url=https%3A%2F%2F532840585-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M3-IU1k8a0MMGt6Gmx-%252Fuploads%252FfCC1BHjYgxVOPret9QHM%252Fimage.png%3Falt%3Dmedia%26token%3De02af9af-3feb-4c2a-81a2-f38d6ce50301&width=768&dpr=1&quality=100&sign=4c8793d81c7fb49bcb0c6e122794a72512e4b7f958d7900144500fb73855e07c' alt='hinhanhthanhtoan4'/><br></br>
            Click vào mục <strong>Nạp thêm tiền</strong> và chọn hình thức thanh toán phù hợp nhất với bạn.<br></br>
            <div class="p-2 m-2 bg-primary bg-opacity-10 border border-primary border-start-1 rounded-end thongtin">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-lg" viewBox="0 0 16 16">
                    <path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0zM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
                </svg>
                Ngoài ra bạn có thể chọn mua hàng siêu tốc qua <strong>Mobile Banking</strong> hoặc <strong>MoMo</strong> để hoàn thành đơn hàng 1 cách nhanh chóng.
            </div>
            <br></br>
            <br></br>
            <h5>Bước 3:</h5>
            Sau khi đã nạp tiền thành công và nhận đủ số Dcoin để thanh toán, quay lại trang giỏ hàng và bấm nút <strong>Thanh toán bằng số dư</strong> 
            <br></br>
            <br></br>
            <img className='imgthanhtoanb3' src='https://help.divineshop.vn/~gitbook/image?url=https%3A%2F%2F532840585-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M3-IU1k8a0MMGt6Gmx-%252Fuploads%252FLWy5V2WX7QebJKobxbJP%252Fimage.png%3Falt%3Dmedia%26token%3D00b7228b-3c27-45bb-a0bc-6f26815e8f2e&width=768&dpr=4&quality=100&sign=73502035f126734a8614aa352f1dfe7386dc6894ac18fca4ae4c7793c7698160' alt='thanhtoanbuoc2'></img>
           <br></br>
            Mặc định tài khoản của bạn sẽ được kích hoạt bảo mật 2 lớp khi thanh toán. Hệ thống sẽ yêu cầu nhập mã xác thực được gửi về Email của bạn. Bạn chỉ cần kiểm tra Email và nhập mã nhận được rồi ấn <strong>Xác Nhận</strong>
            <img className='imgthanhtoan4' src='https://help.divineshop.vn/~gitbook/image?url=https%3A%2F%2F532840585-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fassets%252F-M3-IU1k8a0MMGt6Gmx-%252F-M3g9q---HLNs0hMsRZP%252F-M3gEJV-J1hsW9UTPl9Y%252Fimage.png%3Falt%3Dmedia%26token%3De174d019-947c-423e-9e38-fac17cd41f50&width=768&dpr=4&quality=100&sign=8d341d9a0e3b46005c8bf57c03cc3a3162cbd62ce97790f4b1539b0230fc6550'/>
            <img className='imgthanhtoan4' src='https://help.divineshop.vn/~gitbook/image?url=https%3A%2F%2F532840585-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M3-IU1k8a0MMGt6Gmx-%252Fuploads%252F1gaWpjMXetMW9K389ZNI%252Fimage.png%3Falt%3Dmedia%26token%3D9b87f3b8-43a4-4a93-8a7e-9448ec5803b3&width=768&dpr=4&quality=100&sign=556df6ff40716d798bd7b31cdbabf9002aa7646e17d344562dbe93f2cd9bd1f8'/>  
            <br></br>
            <br></br>
         
            <h5>Bước 4:</h5>
            <span>

            Bạn sẽ được chuyển đến trang đơn hàng, tại đây bạn sẽ thấy Key game. Bạn hãy copy key game này và bấm vào nút <strong>Nhập key </strong>(hoặc hướng dẫn sử dụng) để tiến hành nhận sản phẩm nhé.</span>
            
            <br></br>
            <br></br>
            <img className='imgthanhtoan5' src='https://help.divineshop.vn/~gitbook/image?url=https%3A%2F%2F532840585-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M3-IU1k8a0MMGt6Gmx-%252Fuploads%252FOHt1lRkG5aX1l8bBIcQf%252Fimage.png%3Falt%3Dmedia%26token%3Dbe1d4005-1410-4dcc-a14f-4fbbb41e01df&width=768&dpr=1&quality=100&sign=672d521849999aadc7a58c8343197f7972203347763c1e1187450c82b28a18c7' alt='thanhtoanbuoc1' />
            <br></br>
            <div class="p-2 m-2 bg-danger bg-opacity-10 border border-danger border-start-1 rounded-end thongtin">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-lg" viewBox="0 0 16 16">
                    <path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0zM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
                </svg>
            <span>Sẽ có một số sản phẩm đặc biệt cần thời gian xử lý, bạn hãy thường xuyên kiểm tra Email của mình. Trong quá trình xử lý nhân viên sẽ thông báo với bạn qua Email.</span>
              
            </div>
          
            <div class="p-2 m-2 bg-primary bg-opacity-10 border border-primary border-start-1 rounded-end thongtin">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-lg" viewBox="0 0 16 16">
                    <path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0zM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
                </svg>
            <span>Sẽ có một số sản phẩm đặc biệt cần thời gian xử lý, bạn hãy thường xuyên kiểm tra Email của mình. Trong quá trình xử lý nhân viên sẽ thông báo với bạn qua Email.</span>
              
            </div>
            <Btn/>
        </div>
    )
}
export default ContentPage9;