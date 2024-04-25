export default function Card({ children }) {
	return (
		<div className='relative rounded-md border border-gray-900 bg-neutral-950 p-4 text-white'>
			{children}
		</div>
	)
}
