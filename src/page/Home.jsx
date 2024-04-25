import Layout from '@components/Layout'
import CardComponent from '@components/CardComponent'
import { COMPONENTS } from '@data/components'

export default function Home() {
	return (
		<Layout>
			<div className='relative mx-auto flex max-w-2xl flex-col items-center pt-8'>
				<h1 className='text-center text-3xl font-bold text-white sm:text-6xl'>
					Choose - Resource
				</h1>
				<p className='mt-6 text-xl text-gray-500'>
					Crafted with <span className='text-gray-50'>Tailwind CSS</span>.
				</p>
			</div>
			<section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-8'>
				{COMPONENTS.map((item, index) => (
					<CardComponent key={index}>
						<item.component />
					</CardComponent>
				))}
			</section>
		</Layout>
	)
}
