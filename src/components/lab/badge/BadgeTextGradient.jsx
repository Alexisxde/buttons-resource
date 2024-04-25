export default function BadgeTextGradient() {
	return (
		<span className='inline-flex cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-gray-950 px-3 py-1 text-xs font-medium text-gray-300 backdrop-blur-3xl'>
			<span className='bg-gradient-to-t from-[#110477] to-[#fff] bg-clip-text text-transparent'>
				Badge Text
			</span>
		</span>
	)
}
