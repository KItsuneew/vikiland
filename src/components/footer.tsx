export default function Footer() {
	return (
		<div className=' font-bold bg-[#b4d6a1] mt-12 -mx-4 px-4 py-8 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8 '>
			<div className='max-w-[1440px] mx-auto flex justify-between'>
				<div className='flex gap-8'>
					<img className='w-[218px]' src='./logo.png' alt='logo' />
					<div className=' text-xl'>
						<p>Студия английского языка</p>
						<p>Виктории Вавиловой</p>
					</div>
				</div>
				<div className='text-2xl font-bold'>
					<a href='#'>Публичная оферта</a>
				</div>
			</div>
		</div>
	);
}
