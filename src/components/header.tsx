import { IoLogoInstagram } from 'react-icons/io';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';

export default function Header() {
	return (
		<header className='flex justify-between items-center'>
			{/* <div className=''>
				<a href=''>
					<img className='w-[250px]' src='./logo.png' alt='' />
				</a>
			</div> */}

			<nav>
				<ul className='flex justify-between gap-10 text-2xl font-medium'>
					<li>
						<a href='#'>Занятия</a>
					</li>
					<li>
						<a href='#'>Стоимость</a>
					</li>
					<li>
						<a href='#'>Контакты</a>
					</li>
				</ul>
			</nav>
			<div className=''>
				<ul className='flex justify-between gap-4'>
					<li>
						<a href='#'>
							<IoLogoInstagram size={48} />
						</a>
					</li>
					<li>
						<a href='#'>
							<FaTelegram size={48} />
						</a>
					</li>
					<li>
						<a href='tel:+89841546020'>
							<FaWhatsapp size={48} />
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
}
