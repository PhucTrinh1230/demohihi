import 'bootstrap/dist/css/bootstrap.min.css';
import './ContentPage10.css'
import Btn from '../../common/ButtonSupport';
import { Link, NavLink } from 'react-router-dom';

const ContentPage10 = () => 
{
    return (
        <div className='wrapper'>
            <h3>Thông tin bảo hành chung</h3>
            <img className='imgbaohanh1' src='https://help.divineshop.vn/~gitbook/image?url=https%3A%2F%2F532840585-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fassets%252F-M3-IU1k8a0MMGt6Gmx-%252F-MamG0I-dXEPsBnhhjPa%252F-MamGEem_SO8UhOXFuy6%252FDIVINE%2520SHOP%2520CAM%2520KET.png%3Falt%3Dmedia%26token%3Ddaacd2e0-a9e5-496f-b11d-4607beb17338&width=768&dpr=1&quality=100&sign=2ad5576f6af7af43f3620a551387313876e67ac1d1f397e5464867dac833b492' alt='camket'>
            </img>
            <div className="p-2 m-2 bg-primary bg-opacity-10 border border-primary border-start-1 rounded-end thongtin1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-lg" viewBox="0 0 16 16">
                    <path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0zM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
                </svg>
                Chính sách và thời gian bảo hành sản phẩm sẽ được ghi trong thông tin chi tiết của sản phẩm.
               
            </div>

            <div className="p-2 m-2 bg-primary bg-opacity-10 border border-primary border-start-1 rounded-end thongtin1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-lg" viewBox="0 0 16 16">
                    <path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0zM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
                </svg>
                Với các sản phẩm không có thông tin chi tiết, thời gian bảo hành mặc định là 1 tháng. (*)
               
            </div>
            <div className='border-start'>(*) Thời gian bảo hành mặc định cho các sản phẩm không có hạn sử dụng. Đối với các sản phẩm có hạn sử dụng, thời gian bảo hành bằng thời gian sử dụng của sản phẩm.</div>
        <Btn/>
        </div>
    )   
}
export default ContentPage10;