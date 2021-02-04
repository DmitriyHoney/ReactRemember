import { NavLink } from 'react-router-dom'
import ActiveFriends from './ActiveFriends/ActiveFriends.jsx'
import cls from './Navbar.module.css'

const Navbar = (props) => {
    
    let {links, activeFiends} = props.sidebarPage
    return (
        <nav className={cls.nav}>
            <ul className="list">
                {links.map(link => (
                    <li className={cls.item} key={link.path}>
                        <NavLink to={link.path} activeClassName={cls.active}>{link.name}</NavLink>
                    </li>
                ))}
            </ul>
            <div className={cls.friends}>
             <ActiveFriends activeFiends={activeFiends} />
            </div>
      </nav>
    )
}

export default Navbar