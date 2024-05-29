import 'bootstrap/dist/css/bootstrap.min.css';
import './ContentPage4.css'
import Btn from '../../common/ButtonSupport';
import { Link, NavLink } from 'react-router-dom';

const ContentPage4 = () => {
    return (
        <div className='wrapper'>
            <h3>Chính sách VIP</h3>
            <p>Mỗi khi sử dụng <strong>Dcoin</strong> để mua hàng khách hàng sẽ nhận được <strong>một điểm tích lũy.</strong> Khi đạt đủ số điểm tích lũy, tài khoản của quý khách sẽ được tự động nâng cấp thành các cấp VIP tương ứng</p>
            <br></br>
            <table class="table m-2">
                <thead>
                    <tr>
                        <th scope="col">Ưu đãi</th>
                        <th scope="col">Đồng - Bạc</th>
                        <th scope="col">Vàng</th>
                        <th scope="col">Kim Cương</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">Tỷ lệ Cashback</td>
                        <td>1%</td>
                        <td>2%</td>
                        <td>3%</td>
                    </tr>
                    <tr>
                        <td scope="row">Ưu tiên khi đông khách</td>
                        <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                            <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                        </svg></td>
                        <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                            <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                        </svg></td>
                        <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                            <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                        </svg></td>
                    </tr>
                    <tr>
                        <td scope="row">Số điểm cần để <br></br>đạt được hạng VIP</td>
                        <td colspan="">3.000.000 <br></br> - 49.999.999</td>
                        <td colspan="">50.000.000 <br></br> - 199.999.999</td>
                        <td colspan="">200.000.000 + </td>

                    </tr>
                </tbody>
            </table>

            <h3>Lưu Ý</h3>
            <div class="p-3 m-3 bg-danger bg-opacity-10 border border-danger border-start-1 rounded-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-lg" viewBox="0 0 16 16">
                    <path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0zM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
                </svg>
                Điểm tích lũy là tổng Dcoin dùng để mua hàng được tính từ ngày bắt đầu triển khai dịch vụ VIP 
                <strong>12-12-2017</strong>
            </div>
            <div class="p-3 m-3 bg-danger bg-opacity-10 border border-danger border-start-1 rounded-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-lg" viewBox="0 0 16 16">
                    <path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0zM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
                </svg>
                Divine Shop có quyền điều chỉnh chính sách ưu đãi cho VIP tùy theo từng thời điểm mà không cần thông báo trước.
            </div>
            <Btn/>
        </div>
    )
    
}
export default ContentPage4;