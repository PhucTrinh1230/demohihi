
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContentPage2.css'
import Btn from '../../common/ButtonSupport';
const ContentPage2 = () => {
    return (
        <div className="wrapper">
            <h3>Giới thiệu Steam</h3>
            <p>Steam là website phân phối sản phẩm về Game bản quyền, Phần mềm, tiện ích hàng đầu Việt Nam.</p>
            <p><strong>Divine Shop có mục tiêu đơn giản như sau:</strong></p>
            <strong>
                <p className='muctieu' >1. Tốc độ nhanh</p>

                <p className='muctieu' >  2. Bảo hành - Uy tín</p>

                <p className='muctieu'>3. Chất lượng dịch vụ</p>  </strong>

            <h3>Hình ảnh văn phòng Steam</h3>
            <div className='row'>
                <div className='vanphong col-xl-4 col-lg-4'>
                    <img src='https://help.divineshop.vn/~gitbook/image?url=https%3A%2F%2F532840585-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M3-IU1k8a0MMGt6Gmx-%252Fuploads%252FnzsaqRcnpH1IDGxzf7tK%252FLo%25CC%2582%25CC%2581i%2520va%25CC%2580o.jpg%3Falt%3Dmedia%26token%3D1f2e3332-93e0-490d-ba2e-7a566258f980&width=768&dpr=1&quality=100&sign=1dfef9d200d1903adef40c937ce3c75b555638e2ffe1c97a97a7bc85b0d4e8dd' alt='hinhanhvanphong'></img>
                    <span className='descriptionImg'>Văn phòng Steam</span>

                    <img src='https://help.divineshop.vn/~gitbook/image?url=https%3A%2F%2F532840585-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M3-IU1k8a0MMGt6Gmx-%252Fuploads%252FbobYlhrSSOKvGGxq2fuG%252FIMG_9676.png%3Falt%3Dmedia%26token%3D38e2eb3f-b60b-4012-a769-1802d2366370&width=768&dpr=1&quality=100&sign=4d162f1ddd877576955a1b34fe05868ed15cba392e6aca7bea95aaafdcbd23fb' alt='hinhanhvanphong'></img>
                    <span className='descriptionImg'>Phòng bán hàng</span>
                    <img src='https://help.divineshop.vn/~gitbook/image?url=https%3A%2F%2F532840585-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M3-IU1k8a0MMGt6Gmx-%252Fuploads%252FLKrStZsILoG4yzHclxP4%252FHCNS%2520-%2520KT.jpg%3Falt%3Dmedia%26token%3De1c71c6d-571f-4594-8427-afd917b37a22&width=768&dpr=1&quality=100&sign=60c17637e24974e5364fb468aa0463472c9784f24d6fde438bbad57d94517acb' alt='hinhanhvanphong'></img>
                    <span className='descriptionImg'>Phòng HCNS</span>
                </div>
                <div className='vanphong col-xl-4 col-lg-4'>
                    <img src='https://help.divineshop.vn/~gitbook/image?url=https%3A%2F%2F532840585-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M3-IU1k8a0MMGt6Gmx-%252Fuploads%252FnzsaqRcnpH1IDGxzf7tK%252FLo%25CC%2582%25CC%2581i%2520va%25CC%2580o.jpg%3Falt%3Dmedia%26token%3D1f2e3332-93e0-490d-ba2e-7a566258f980&width=768&dpr=1&quality=100&sign=1dfef9d200d1903adef40c937ce3c75b555638e2ffe1c97a97a7bc85b0d4e8dd' alt='hinhanhvanphong'></img>
                    <span className='descriptionImg'>Không gian chung</span>
                    <img src='https://help.divineshop.vn/~gitbook/image?url=https%3A%2F%2F532840585-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M3-IU1k8a0MMGt6Gmx-%252Fuploads%252FZvlI79JIjlsCQLY0W2nz%252FKhu%2520vu%25CC%259B%25CC%25A3c%2520kho%25CC%2582ng%2520gian%2520chung.jpg%3Falt%3Dmedia%26token%3D37cd908b-634b-4ff8-8d41-abefd4801884&width=768&dpr=1&quality=100&sign=98c1bfceeb1f1ad66604977ab820c8ee7d40c04dadaeaa0c78b1e5132fb4a930' alt='hinhanhvanphong'></img>
                    <span className='descriptionImg'>Bộ phận CSKH</span>
                    <img src='https://help.divineshop.vn/~gitbook/image?url=https%3A%2F%2F532840585-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M3-IU1k8a0MMGt6Gmx-%252Fuploads%252FqNtKsQ22M89EbrN0Vqju%252FIMG_9688.png%3Falt%3Dmedia%26token%3D54d810b4-37e3-4d1f-908e-ed08eea11202&width=768&dpr=1&quality=100&sign=7103f895bc98ad81c37509d00df6c3c2f074177e83d45c311130d891f366d9a1' alt='hinhanhvanphong'></img>
                    <span className='descriptionImg'>Thư viện sách</span>
                </div>
                <div className='vanphong col-xl-4 col-lg-4'>
                    <img src='https://help.divineshop.vn/~gitbook/image?url=https%3A%2F%2F532840585-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M3-IU1k8a0MMGt6Gmx-%252Fuploads%252F4roCJMl9NWKnLD7hCvB4%252FBan%2520Bi-a%2520gia%25CC%2589i%2520tri%25CC%2581.jpg%3Falt%3Dmedia%26token%3D438221da-3622-41f6-b49b-fee224c2d825&width=768&dpr=1&quality=100&sign=92e89b15e1dd87991c62cae265c445c0a7b4ae629f038cb705f9b148f1844265' alt='hinhanhvanphong'></img>
                    <span className='descriptionImg'>Khu giải trí</span>
                    <img src='https://help.divineshop.vn/~gitbook/image?url=https%3A%2F%2F532840585-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M3-IU1k8a0MMGt6Gmx-%252Fuploads%252FMOp5vAzkAwKlw8ThZTDh%252FIMG_9706.png%3Falt%3Dmedia%26token%3D78e282fb-6205-4885-a6a6-f2cddc4e1842&width=768&dpr=1&quality=100&sign=5a3dfeeaabc98d6e425ec9fbb59bb50f7714cf3766964cfc99f3f42152d336f3' alt='hinhanhvanphong'></img>
                    <span className='descriptionImg'>Khu làm việc</span>
                    <img src='https://help.divineshop.vn/~gitbook/image?url=https%3A%2F%2F532840585-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M3-IU1k8a0MMGt6Gmx-%252Fuploads%252F7yrlWGhkPxG3Pf2rMlBA%252FKho%25CC%2582ng%2520gian%2520chung.jpg%3Falt%3Dmedia%26token%3Dd9919f4d-b4d7-41fa-bf47-dbd694934020&width=768&dpr=1&quality=100&sign=7af4b81cddb1c12403e5541199751a59a07663523e7491ac6c7d23a5ac1d8c9c' alt='hinhanhvanphong'></img>
                    <span className='descriptionImg'>Khu trò chuyện</span>
                </div>

            </div>
            <br></br>
            <h3>Vì sao khách hàng chọn Steam</h3>
            <p>Steam là website phân phối sản phẩm về Game bản quyền, Phần mềm, tiện ích hàng đầu Việt Nam.</p>
            <br></br>
            <h5>1. Uy tín 9 năm hoạt động</h5>
            <p>Divine Shop là một tên tuổi lâu đời trong cộng đồng Phần mềm bản quyền Việt Nam. Từ những ngày đầu khi các nền tảng cung cấp game bản quyền quốc tế như Steam, Battle.net, Origin bắt đầu được biết tới tại Việt Nam.
                Trong suốt thời gian hoạt động chúng tôi đã có:</p>
            <br></br>

            <div class="p-3 m-3 bg-info bg-opacity-10 border border-info border-start-1 rounded-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square m-2" viewBox="0 0 16 16">
                    <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z" />
                    <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0" />
                </svg>
                <strong>9 Năm liền là Shop phần mềm bản quyền uy tín nhất Việt Nam</strong><br></br>
                <span>Do chính cộng đồng bình chọn từ các group về phần mềm và game bản quyền.</span>
            </div>
            <div class="p-3 m-3 bg-info bg-opacity-10 border border-info border-start-1 rounded-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square m-2" viewBox="0 0 16 16">
                    <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z" />
                    <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0" />
                </svg>
                <strong>Hơn 1 Triệu Khách hàng tin tưởng và mua hàng</strong><br></br>
                <span>Chúng tôi tự hào mang phần mềm bản quyền đến cho hơn 1 Triệu khách hàng tại Việt Nam trong suốt 9 năm hoạt động.
                    Hàng tháng website Divineshop chào đón hơn 400.000 lượt truy cập mua hàng.</span>
            </div>
            <div class="p-3 m-3 bg-info bg-opacity-10 border border-info border-start-1 rounded-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square m-2" viewBox="0 0 16 16">
                    <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z" />
                    <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0" />
                </svg>
                <strong>Được các Kols, Streamer hàng đầu Việt Nam lựa chọn và quảng bá</strong><br></br>
                <span>
                    Mixigaming, Xemesis, Trực Tiếp Game, Nguyễn Quí Gamer, Divine Esports, v.v. </span>
            </div>
            <div class="p-3 m-3 bg-info bg-opacity-10 border border-info border-start-1 rounded-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square m-2" viewBox="0 0 16 16">
                    <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z" />
                    <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0" />
                </svg>
                <strong>Fanpage với hơn 300.000 người theo dõi</strong><br></br>
                <span>
                    Chúng tôi xây dựng một cộng đồng lớn mạnh với rất nhiều Fanpage và Group sinh hoạt khác nhau.
                    Fanpage: Steam Shop Game Bản Quyền, Steam TV, Steam Esports </span>
            </div>
            <br></br>
            <h5>2. Sản phẩm đa dạng</h5>
            <p>Với hàng chục nghìn sản phẩm trên Website Divineshop.vn chúng tôi tự tin mang đến cho bạn tất cả những gì bạn cần trong thế giới bản quyền.</p>


            <div class="p-3 m-3 bg-info bg-opacity-10 border border-info border-start-1 rounded-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-lg" viewBox="0 0 16 16">
                    <path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0zM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
                </svg>
                <strong>Các phần mềm tiện ích</strong> <br></br>
                Window, Office, Adobe, AutoDesk, Freepik, Canva, ChatGPT, v.v.
            </div>
            <div class="p-3 m-3 bg-info bg-opacity-10 border border-info border-start-1 rounded-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-lg" viewBox="0 0 16 16">
                    <path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0zM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
                </svg>
                <strong>Các phần mềm giải trí đa dạng</strong><br></br>
                <span>Netflix, Youtube Premium, Spotify, v.v..</span>
            </div>
            <div class="p-3 m-3 bg-info bg-opacity-10 border border-info border-start-1 rounded-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-lg" viewBox="0 0 16 16">
                    <path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0zM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
                </svg>
                <strong>Các loại thẻ nạp</strong><br></br>
                <span>
                    Steam Wallet, iTunes, Google Play, v.v. </span>
            </div>
            <div class="p-3 m-3 bg-info bg-opacity-10 border border-info border-start-1 rounded-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-lg" viewBox="0 0 16 16">
                    <path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0zM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
                </svg>
                <strong>Các phần mềm học tập chất lượng</strong><br></br>
                <span>
                    Duolingo, Coursera, Skill Share, Linked In, Lumosity, Grammarly,v.v.</span>
            </div>
            <br></br>
            <h5>3. Hình thức thanh toán thuận tiện</h5>



            <div class="p-3 m-3 bg-info bg-opacity-10 border border-info border-start-1 rounded-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                </svg>
                <span>Momo</span> <br></br>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                </svg>
                <span>VNPay</span> <br></br>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                </svg>
                <span>Chuyển khoản ngân hàng</span> <br></br>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                </svg>
                <span>ATM</span> <br></br>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                </svg>
                <span>Thẻ Viettel</span> <br></br>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                </svg>
                <span>Megapay</span> <br></br>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                </svg>
                <span>Visa, Master</span> <br></br>

            </div>
            <div class="p-3 m-3 bg-info bg-opacity-10 border border-info border-start-1 rounded-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-lg" viewBox="0 0 16 16">
                    <path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0zM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
                </svg>
                <strong>Hệ thống tự động giúp hoàn thành đơn hàng ngay lập tức</strong><br></br>
                <span>
                    Mọi quy trình thanh toán đều được tự động cao giúp khách hàng có thể hoàn thành đơn hàng chỉ trong 1 phút.</span>
            </div>
            <br></br>
            <h5>4. Chế độ bảo hành và bảo trợ</h5>


            <div class="p-3 m-3 bg-info bg-opacity-10 border border-info border-start-1 rounded-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square m-2" viewBox="0 0 16 16">
                    <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z" />
                    <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0" />
                </svg>
                <strong>Cam kết bảo hành</strong><br></br>
                <span>Steam cam kết bảo hành với mọi sản phẩm. Thông tin bảo hành từng sản phẩm đều được ghi chi tiết theo từng loại sản phẩm.
                    Trong suốt thời gian sử dụng sản phẩm. Bạn sẽ nhận được sự hỗ trợ từ đội ngũ tư vấn của chúng tôi <strong>hoàn toàn miễn phí.</strong></span>
            </div>
            <div class="p-3 m-3 bg-info bg-opacity-10 border border-info border-start-1 rounded-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square m-2" viewBox="0 0 16 16">
                    <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z" />
                    <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0" />
                </svg>
                <strong>Hỗ trợ tất cả các ngày trong năm</strong><br></br>
                <span>Chúng tôi Online liên tục từ <strong>08:30 đến 23:00</strong> ,  tất cả các ngày trong năm kể cả lễ, Tết.
                    Chúng tôi tự hào với thời gian phản hồi khách hàng trung bình là <strong>1 Phút.</strong></span>
            </div>
            <div class="p-3 m-3 bg-info bg-opacity-10 border border-info border-start-1 rounded-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square m-2" viewBox="0 0 16 16">
                    <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z" />
                    <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0" />
                </svg>
                <strong>Đội ngũ tư vấn nhiều kinh nghiệm</strong><br></br>
                <span>Đội ngũ tư vấn với nhiều năm kinh nghiệm sẽ giải đáp cho bạn tất cả các thắc mắc trong quá trình mua hàng và cài đặt sản phẩm.
                    Với những trường hợp khó xử lý. Chúng tôi sẽ Teamview trực tiếp để cài đặt giúp bạn .</span>
            </div>
            <br></br>
            <h5>5. Giá cả và ưu đãi </h5>
            <span>Chúng tôi đem đến cho khách hàng những sản phẩm với giá cả tốt nhất cùng với đó là những ưu đãi vô cùng hấp dẫn</span>


            <div class="p-3 m-3 bg-info bg-opacity-10 border border-info border-start-1 rounded-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square m-2" viewBox="0 0 16 16">
                    <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z" />
                    <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0" />
                </svg>
                <strong>Hệ thống khách hàng VIP </strong><br></br>
                <span>Khách hàng thân thiết của Steam sẽ nhận được những ưu đãi vô cùng hấp dẫn như: <br></br>
                    - Hoàn tiền sau khi mua hàng <br></br>
                    - Ưu tiên thanh toán<br></br>
                    - Số điện thoại hỗ trợ riêng<br></br>
                    Xem thêm chi tiết tại: Thông tin ưu đãi vip </span> <br></br>
            </div>
            <br></br>
            <h3>Các thông tin liên hệ với chúng tôi</h3>
            <div className='row p-2 m-2'>
                Email: hotro@steamshop.vn<br></br>
                Tổng đài tự động: 1900 633 305<br></br>
                Kênh chat: Steam Shop<br></br>
                Fanpage: Steam - Game bản quyền
            </div>
        <Btn/>
        </div>

    )
}
export default ContentPage2;