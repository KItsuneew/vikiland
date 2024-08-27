export default function Main() {
	return (
		<div>
			<div>
				<div className='flex gap-10'>
					<div className='left w-[60%] mt-[8%] flex flex-col gap-10 items-start'>
						<h1 className='text-5xl font-bold '>
							<span className='text-blue-600'>Мы научим вашего ребёнка</span>{' '}
							ГОВОРИТЬ на английском
						</h1>
						<p className='text-2xl font-medium'>
							Развивающие занятия английским{' '}
							<span className='text-blue-600'>для детей от 4-х лет</span>
						</p>

						<a
							className='border-2 border-gray-500 px-5 py-3 rounded-xl uppercase text-2xl'
							href='#'
						>
							Записаться
						</a>
					</div>
					<div className='right  text-center '>
						<figure>
							<img className='w-[450px] rounded-xl' src='./one.jpg' alt='one' />
							<figcaption className='text-xl'>
								<span className='text-blue-600 font-bold'>Вавилова</span>{' '}
								Виктория
							</figcaption>
							<figcaption className='italic font-semibold'>
								руководитель <span className='text-blue-600'>студии</span>
							</figcaption>
						</figure>
					</div>
				</div>
			</div>
		</div>
	);
}
