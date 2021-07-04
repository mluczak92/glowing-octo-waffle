import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
    return (
        <nav>
            <Link to='/raz'>
                <li>Raz</li>
            </Link>
            <Link to='/dwa'>
                <li>Dwa</li>
            </Link>
            <Link to='/trzy'>
                <li>Trzy</li>
            </Link>
        </nav>
    )
}

export default Nav;