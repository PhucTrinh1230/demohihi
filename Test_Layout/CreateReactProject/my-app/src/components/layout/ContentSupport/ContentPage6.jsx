import 'bootstrap/dist/css/bootstrap.min.css';
import './ContentPage3.css'
import Btn from '../../common/ButtonSupport';
import { Link, NavLink } from 'react-router-dom';

const ContentPage6 = () => {
    return (
        <div className='wrapper'>
            <h3>Chính sách bảo mật</h3>
            <p><strong>1. Mục đích và phạm vi thu thập</strong></p>
            Việc thu thập dữ liệu chủ yếu trên DivineShop.vn bao gồm: email, điện thoại, tên đăng nhập, mật khẩu đăng nhập, địa chỉ Khách hàng. Đây là các thông tin mà DivineShop.vn cần Khách hàng cung cấp bắt buộc khi đăng ký sử dụng dịch vụ và DivineShop sử dụng nhằm liên hệ xác nhận khi Khách hàng đăng ký sử dụng dịch vụ trên DivineShop.vn, đảm bảo quyền lợi cho Khách hàng.
            <br></br>
            <br></br>
            Các Khách hàng sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt động sử dụng dịch vụ dưới tên đăng ký, mật khẩu và hộp thư điện tử của mình. Ngoài ra, Khách hàng có trách nhiệm thông báo kịp thời cho DivineShop.vn về những hành vi sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật khẩu của bên thứ ba để có biện pháp giải quyết phù hợp
            <br></br>
            <br></br>

            <p><strong>2. Phạm vi sử dụng thông tin</strong></p>

            DivineShop.vn sử dụng thông tin Khách hàng cung cấp để:

                Cung cấp các dịch vụ đến Khách hàng.

                Gửi các thông báo về các hoạt động trao đổi thông tin giữa Khách hàng và DivineShop.vn.

                Ngăn ngừa các hoạt động phá hủy tài khoản người dùng của Khách hàng hoặc các hoạt động giả mạo Khách hàng.

                Liên lạc và giải quyết với khách hàng trong những trường hợp đặc biệt.

                Không sử dụng thông tin cá nhân của Khách hàng ngoài mục đích xác nhận và liên hệ có liên quan đến giao dịch tại DivineShop.vn.

                DivineShop vn có trách nhiệm hợp tác cung cấp thông tin cá nhân Khách hàng khi có yêu cầu từ cơ quan nhà nước có thẩm quyền.<br></br>

            <br></br>
           

            <p><strong>3. Thời gian lưu trữ thông tin</strong></p>
            <p>Dữ liệu cá nhân của Khách hàng sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ hoặc tự Khách hàng đăng nhập và thực hiện hủy bỏ. Còn lại trong mọi trường hợp thông tin cá nhân Khách hàng sẽ được bảo mật trên máy chủ của DivineShop.vn.</p>
          
            <br></br>
            <br></br>
            <p><strong>4. Địa chỉ của đơn vị thu thập, quản lý thông tin và hỗ trợ Khách hàng</strong></p>
            DivineShop.vn

Trụ sở chính:Tầng 2 - 96 Định Công, Thanh Xuân, Hà Nội 

Email: hotro@divineshop.vn
            <br></br>
            <br></br>
            <p><strong>5. Phương tiện và công cụ để Khách hàng tiếp cận, chỉnh sửa và xoá dữ liệu của mình</strong></p>
            Khách hàng có quyền tự kiểm tra, cập nhật, điều chỉnh thông tin cá nhân của mình bằng cách đăng nhập vào tài khoản chỉnh sửa và xoá thông tin cá nhân hoặc yêu cầu DivineShop thực hiện việc này.
            <br></br>
            Khách hàng có quyền gửi khiếu nại về việc lộ thông tin các nhân cho bên thứ ba đến Ban quản trị của DivineShop.vn. Khi tiếp nhận những phản hồi này, DivineShop sẽ xác nhận lại thông tin, phải có trách nhiệm trả lời lý do và hướng dẫn Khách hàng khôi phục và bảo mật lại thông tin.
            <br></br>
            <br></br>
            <Btn />
        </div>
    )
}
export default ContentPage6;