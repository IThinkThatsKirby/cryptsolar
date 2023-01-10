import Bars3Icon from '@heroicons/react/24/solid/Bars3Icon';
import React from 'react';

const Menu = () => {
	return (
		<div className='flex flex-col space-y-5 font-extrabold items-center p-2 pb-3'>
			<a href='/account'>
				<div className=' p-2 text-sky-300 hover:text-sky-600'>Acount</div>
			</a>
			<a href='/orders'>
				<div className=' p-2 text-sky-300 hover:text-sky-600'>My Order</div>
			</a>
			<a href='/landing'>
				<div className=' p-2 text-sky-300 hover:text-sky-600'>Sign Out</div>
			</a>
		</div>
	);
};

export default Menu;
