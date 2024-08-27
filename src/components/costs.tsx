export default function Costs() {
	return (
		<div className='flex flex-col gap-8 '>
			<h2 className='text-center text-3xl font-bold'>Стоимость занятий</h2>
			<div className='flex justify-evenly'>
				<div className='left flex flex-col gap-4 items-center'>
					<h4 className='text-2xl font-bold'>Обучение в группе</h4>
					<p className='text-xl tracking-wider'>5600 руб./ месяц</p>
					<a
						className='border-2 border-gray-500 px-5 py-3 rounded-xl uppercase text-2xl'
						href='#'
					>
						Записаться
					</a>
				</div>
				<div className='right flex flex-col gap-4 items-center'>
					<h4 className='text-2xl font-bold'>Индивидуальные занятия</h4>
					<p className='text-xl tracking-wider'>1500 руб./ 1 занятие</p>
					<a
						className='border-2 border-gray-500 px-5 py-3 rounded-xl uppercase text-2xl'
						href='#'
					>
						Записаться
					</a>
				</div>
			</div>
			<div className='middle border-2 border-sky-500 w-[50%] m-auto text-center text-2xl p-2'>
				<h4 className='text-blue-600'>Дополнительные бонусы:</h4>
				<ul>
					<li>5% семейная скидка на каждого ребёнка</li>
					<li>5% скидка для посещающих студию 3й и более год</li>
				</ul>
			</div>
		</div>
	);
}
