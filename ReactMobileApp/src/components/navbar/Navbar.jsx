import './navbar.css'
import Button from '../button/Button'
import logo from '../../assets/images/logo.svg'


function Navbar(){
    return(
        <>
           <nav className='nav'>

            <img className='logo' src={logo} alt="Logo Sync"/>

           <ul>

            <li className='li'><a href='http://localhost:5173/home'>DESCRIPTION</a></li> 
            <li className='li'><a href='http://localhost:5173/home'>FEATURES</a></li> 
            <li className='li'><a href='http://localhost:5173/home'>SCREENS</a></li> 
            <li className='li'><a href='http://localhost:5173/home'>EXTRA</a></li>
           
            <li className='li'><Button buttonStyle={'buttonNav'} buttonText={'DOWNLOAD'} ></Button></li>
        </ul>
           </nav>

        </>
    )

}

export default Navbar