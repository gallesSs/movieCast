import s from './Navigation.module.css'
import {NavLink} from 'react-router';
import clsx from 'clsx';

const Navigation = () => {
	const buildLinkClass = ({isActive}) => {
		return clsx(s.link, isActive && s.isActive)
	}
	return (
		<div className={s.container}>
			<NavLink to='/' className={buildLinkClass}>Home</NavLink>
			<NavLink to='/movies' className={buildLinkClass}>Movies</NavLink>
		</div>
	);
};

export default Navigation;