export default function Classes() {
	return (
		<div>
			<h2 className='font-bold text-3xl text-center'>Наши занятия</h2>
			<div className='flex gap-10 mt-[5%]'>
				<div className='left w-[60%] flex flex-col gap-16 items-start'>
					<h3 className='text-3xl font-medium'>
						<span className='text-blue-600'>Занятия проходят</span> в небольших
						группах до 6 человек.
					</h3>
					<div className=''>
						<h3 className='text-3xl'>Длительность зависти от возраста:</h3>
						<ul className='text-xl'>
							<li className='py-4'>45 минут для детей 4-8 лет</li>
							<li>60 минут для детей с 9 лет</li>
						</ul>
					</div>
					<a
						className='mt-[10%] border-2 border-gray-500 px-5 py-3 rounded-xl uppercase text-2xl'
						href='#'
					>
						ЗАПИСАТЬСЯ на бесплатный урок
					</a>
				</div>
				<div className='right '>
					<img className='w-[450px] rounded-xl' src='./two.jpg' alt='' />
				</div>
			</div>
		</div>
	);
}
