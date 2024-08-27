export default function Map() {
	return (
		<div className='text-center flex flex-col gap-10'>
			<h2 className='text-4xl font-bold'>Где мы находимся?</h2>
			<p className='text-3xl'>г. Владивосток, ул. Ивана Сусанина, д. 30</p>
			<div className='flex items-center justify-evenly'>
				<div className='left '>
					<img className='w-[450px]  rounded-xl' src='./obrez.jpg' alt='' />
				</div>
				<div className='right border-2 border-sky-400 p-10'>
					<ul>
						<li>Время работы: 09:00 - 20:00</li>
						<li>Телефон:+8 (984) 154 60 20</li>
						<li>Email:</li>
						<li>Контактная информация:</li>
					</ul>
				</div>
			</div>
			<div className=''>
				<a
					className='border-2 border-gray-500 px-5 py-3 rounded-xl uppercase text-2xl'
					href='#'
				>
					ЗАПИСАТЬСЯ на бесплатный урок
				</a>
			</div>
		</div>
	);
}
