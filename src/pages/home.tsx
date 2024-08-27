import Header from '../components/header';
import Main from '../components/main';
import WhyMe from '../components/whyme';
import Classes from '../components/classes';
import Photos from '../components/photos';
import Costs from '../components/costs';
import Map from '../components/map';
import Inf from '../components/information';
import Footer from '../components/footer';
export default function Home() {
	return (
		<div className=' px-4 sm:px-6 md:px-8'>
			<div className='max-w-[1440px] mx-auto py-4 flex flex-col gap-16'>
				<Header />
				<Main />
				<WhyMe />
				<Classes />
				<Photos />
				<Costs />
				<Map />
				<Inf />
			</div>
			<Footer />
		</div>
	);
}
