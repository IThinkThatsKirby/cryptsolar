import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import Menu from './Menu';

const navbar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	return (
		<div className='flex flex-col'>
			<nav className='flex justify-between w-screen top-0 bg-slate-900 max-h-10 from-transparent'>
				<img className='' src='src/assets/cartooncrescent.svg' />
				<div className='text-center self-center absolute inset-x-0 top-0 text-slate-300 text-2xl font-extrabold'>
					Crypt-Solar
				</div>
				<div className='absolute right-0 top-0 flex-col text-left'>
					<button onMouseEnter={() => setIsNavOpen(true)}>
						<Bars3Icon
							className={isNavOpen ? 'collape' : 'h-10 text-sky-600'}
						/>
					</button>
					<div
						className={
							isNavOpen
								? 'rounded border-2 border-emerald-600 bg-gray-900'
								: 'hidden'
						}
						onMouseLeave={() => setIsNavOpen(false)}
					>
						<Menu />
					</div>
				</div>
			</nav>
		</div>
	);
};

export default navbar;
