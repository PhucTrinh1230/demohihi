
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
    return (
        <div className='container'>
            <div className="header">
                <img className='img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/New_Steam_Logo_with_name.jpg/1200px-New_Steam_Logo_with_name.jpg' alt='logoSteam'></img>
                <div className="search-bar">
                    <button type="button" className="btn btn-light">Trang chủ</button>

                    <div class="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg></span>
                        <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                </div>
                
            </div>
            
        </div>)
}
export default Header;