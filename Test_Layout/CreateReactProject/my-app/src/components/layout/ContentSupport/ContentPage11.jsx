import 'bootstrap/dist/css/bootstrap.min.css';
import './ContentPage11.css'
import Btn from '../../common/ButtonSupport';
import { Link, NavLink } from 'react-router-dom';

const ContentPage11 = () => {
    return (
        <div className='wrapper'>
            <h3>Hướng dẫn lấy lại account Steam</h3>
            Dưới đây là các bước giúp bạn có thể lấy lại account Steam nếu bạn có email gốc (Email lúc tạo tài khoản Steam)
            <br></br>
            <br></br>
            <h5>Bước 1:</h5>
            Truy cập link: https://help.steampowered.com/en/wizard/HelpWithLogin<br></br>
            Chọn như hình:
            <img src='https://help.divineshop.vn/~gitbook/image?url=https%3A%2F%2F532840585-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fassets%252F-M3-IU1k8a0MMGt6Gmx-%252F-M35OzzJuvlqrkDeYLXI%252F-M35PW0ifibFOlZun1rr%252Fimage.png%3Falt%3Dmedia%26token%3D89c17769-89ad-4a19-8f30-088e0a73b419&width=768&dpr=1&quality=100&sign=ef7a3bdc8506c0f13531b8b6a3d01a0872930e53a3e5d3eca4d7489b81368836' alt='laylaiaccountbuoc1'/>
            <br></br>
            <br></br>
            <h5>Bước 2:</h5>
            Điền 1 mail bất kì(mail chưa tạo steam) rồi bấm tìm kiếm:<br></br><br></br>
            <img className='laylaiaccountb2' src='https://help.divineshop.vn/~gitbook/image?url=https%3A%2F%2Flh4.googleusercontent.com%2FiTeLpjrgPu-HRxI0JVyLgAg4EErfwjjBAB3LNMtjyoZZf6UFQYlBL4djZAHbfPOXlvX4B6gEHls3nMy3YXrCKcSwe4s7us5Gf75qfOgppUbjpH5ouNcP0ZlwP4Uh23ZbGhGuT2mrSL-IO6nT-pvWJ4vk4pWzOiu08stbRLhMw1Mkas5PyFl55_iPP9WZ3g&width=768&dpr=1&quality=100&sign=b5569cbfa2a4cebc92e6911021226f56cd622667f6a9746007e841368933b491' alt='laylaiaccountbuoc2'/>
            <br></br>
            <br></br>
            <h5>Bước 3:</h5>
            Sau khi bấm tìm kiếm hệ thống sẽ báo không tìm thấy mail liên kết với steam, bạn chọn vào mục <strong>“Search with my account name”</strong> <br></br><br></br>
            <img className='' src='https://help.divineshop.vn/~gitbook/image?url=https%3A%2F%2Flh6.googleusercontent.com%2FE6grBqyba3-mKVdLo6d6zOBoU69V4d9JCS-O_zdSkB5lj-qI2caEsIF1i93tWyfMe-9blx8-LT0f-Q-7ximMdw2gVj20Na3wm9dSLhHF5nUiYgDD8HTo9d5Op1f-SgY8wYk8gk_4VqRP2SPaMgybPRGBOaXBCzTgByDYjeZ9HTAEKGc3zTtXJkqSueTpTQ&width=768&dpr=1&quality=100&sign=b5349c95a832a7415b897c361d853be4bbf8e1d2c06005d18a126b72885eb7c0' alt='laylaiaccountbuoc3'/>
            <br></br>
            <br></br>

            <h5>Bước 4:</h5>
            Điền tên tài khoản steam cần lấy lại nick rồi bấm  <strong>“Search”</strong><br></br><br></br>
            <img className='' src='https://help.divineshop.vn/~gitbook/image?url=https%3A%2F%2Flh6.googleusercontent.com%2FE6grBqyba3-mKVdLo6d6zOBoU69V4d9JCS-O_zdSkB5lj-qI2caEsIF1i93tWyfMe-9blx8-LT0f-Q-7ximMdw2gVj20Na3wm9dSLhHF5nUiYgDD8HTo9d5Op1f-SgY8wYk8gk_4VqRP2SPaMgybPRGBOaXBCzTgByDYjeZ9HTAEKGc3zTtXJkqSueTpTQ&width=768&dpr=1&quality=100&sign=b5349c95a832a7415b897c361d853be4bbf8e1d2c06005d18a126b72885eb7c0' alt='laylaiaccountbuoc4'/>
            <br></br>
            <br></br>
            Sau khi tìm tên account steam bạn sẽ được hiển thị 1 giao diện tương tự như ảnh dưới, do mail tài khoản đã bị đổi nên bạn chọn dòng 2 <strong>“ I no loger have access to this email address”</strong>
            <img className='' src='https://help.divineshop.vn/~gitbook/image?url=https%3A%2F%2Flh4.googleusercontent.com%2Fy1WL8K7X9JiQeL49FO9S4h-IzZiKgVvK0D2XXA0Z7KnQ7EFaQv22fjcVRFmIeiXxRo2AqOxyKs84xzHEvK5SuEk7xy9wE5TtIMA4k9RLpDcS9LYGEaVN-BTs89wcc0UMeCKEG6_csCtNKV3vqlxKtz3IcQyvgPCfG7OKhRHd9V-I-tseU7byAX79tnvO0Q&width=768&dpr=4&quality=100&sign=965a0965a36e0951d8d69b6fce1f58df742523a98e4f67a5d36905bf526c501a' alt='laylaiaccountbuoc4'/>
            <br></br>
            <br></br>


            <h5>Bước 5:</h5>
            Điền các thông tin như hướng dẫn:<br></br><br></br>
            <img className='' src='https://help.divineshop.vn/~gitbook/image?url=https%3A%2F%2F532840585-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fassets%252F-M3-IU1k8a0MMGt6Gmx-%252F-M35OzzJuvlqrkDeYLXI%252F-M35PiadUFUKRFuOjEPy%252Fimage.png%3Falt%3Dmedia%26token%3De46ff966-01ca-48dc-b2e2-1d90e79cd9a4&width=768&dpr=1&quality=100&sign=1d6f311d976594f8e1299a61fc8d07d8dbb0831c3ed751a23d1bea44c470d62b' alt='laylaiaccountbuoc5'/>
            <br></br>
            <br></br>
            Bấm <strong>“Send” </strong>rồi lấy mã xác nhận gửi về email (email đã điền ở dòng 1 ảnh trên) điền mã xác thực để gửi cho steam sau đó chờ steam phản hồi (Thời gian phản hồi trung bình là từ 24-48h).
       <br></br>
       <Btn/>
        </div>

    )
}
export default ContentPage11