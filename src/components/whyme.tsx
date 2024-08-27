export default function WhyMe() {
	return (
		<div>
			<h2 className='text-center text-4xl font-semibold '>Почему мы?</h2>
			<div className='reasons grid grid-cols-2 items-center  justify-items-center pt-10'>
				<div className='reason relative  '>
					<div className='relative'>
						<img
							className='w-[300px] h-auto'
							src='./numberone.jpg'
							alt='number'
						/>

						<div className='content flex flex-col gap-5'>
							<h3 className='font-bold text-3xl'>
								Используем метод полного языкового погружения.
							</h3>
							<p className='font-medium text-bs'>
								Таким образом ребёнок усваивает иностранный язык в естественной
								среде. Малыши много играют на занятиях, старшие ребята учатся
								строить диалоги друг с другом, а также выражать свои мысли в
								монологе.
							</p>
						</div>
					</div>
				</div>
				<div className='reason relative mt-[15%]'>
					<div className='relative'>
						<img
							className='w-[300px] h-auto'
							src='./numbertwo.jpg'
							alt='number'
						/>
						<div className='content'>
							<h3 className='font-bold text-3xl'>
								Мы учим не отдельные слова, а сразу говорим предложениями.
							</h3>
						</div>
					</div>
				</div>
				<div className='reason relative mt-[15%]'>
					<div className='relative'>
						<img
							className='w-[300px] h-auto'
							src='./numberthree.jpg'
							alt='number'
						/>
						<div className='content'>
							<h3 className='font-bold text-3xl'>
								Мы не переводим на русский, а используем наглядность
							</h3>
						</div>
					</div>
				</div>
				<div className='reason relative mt-[25%]'>
					<div className='relative'>
						<img
							className='w-[300px] h-auto'
							src='./numberfoor.jpg'
							alt='number'
						/>
						<div className='content flex flex-col gap-4'>
							<h3 className='font-bold text-3xl'>
								Мы уделяем отдельное место обучению чтению.
							</h3>
							<p className='font-medium text-lg'>
								Уже с 5 лет ребята знакомятся со звуками, а с 6 лет начинают
								читать
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
