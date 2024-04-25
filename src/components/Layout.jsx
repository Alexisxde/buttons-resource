import Header from '@components/Header'

export default function Layout({ children }) {
	return (
		<>
			<div className='absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div>
			<div className='mx-auto h-screen w-full max-w-7xl px-6 md:px-8 lg:px-12'>
				<Header />
				{children}
			</div>
		</>
	)
}
