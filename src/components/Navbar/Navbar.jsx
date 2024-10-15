import './Navbar.css'

export default function Navbar(){

    return(
        <div className='navbar'>
            <div>
                <p className='name-logo'>Yasith</p>
                <p className='underline'></p>
            </div>
            <ul className='nav-menu'>
                <li>Home</li>
                <li>About Me</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className='nav-connect-btn'>Connect With Me</div>
        </div>
    )
}