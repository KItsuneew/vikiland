export default function Inf() {
	return (
		<div className='flex flex-col items-center gap-12'>
			<h2 className='text-3xl font-semibold'>
				Ещё один оффер, чтобы клиент оставил контакты и превратился в лид
			</h2>
			<div className='flex justify-evenly'>
				<div className=''>
					<img className='w-[350px]' src='./lampa.jpg' alt='lampa' />
				</div>

				<div className='flex flex-col items-center w-[35%] gap-10 '>
					<ul className='flex flex-col gap-4 list-disc text-xl'>
						<li className='font-bold '>
							Нужна консультация? Мы с радостью ответим на все ваши вопросы!
						</li>
						<li>
							Вы можете связаться с нами по указанным контактным данным или
							оставить заявку на консультацию.
						</li>
						<li>Ждем вас в Viki Land Studio!</li>
					</ul>
					<a
						className='border-2 border-gray-500 px-5 py-3 rounded-xl uppercase text-2xl mt-[9%]'
						href='#'
					>
						Заказать звонок
					</a>
				</div>
			</div>
		</div>
	);
}
