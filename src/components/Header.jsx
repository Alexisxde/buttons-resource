import Github from '@icons/Github'
import X from '@icons/X'

export default function Header() {
	return (
		<header className='flex justify-between py-8 w-full max-w-5xl my-0 mx-auto'>
			<img className='size-8' src='/favicon.svg' alt='LOGO AO' />
			<nav className='flex gap-6 items-center'>
				<a
					href='https://twitter.com/alexiissxde'
					target='_blank'
					rel='noopener noreferrer'
					className='h-6 w-6 text-white/85 transition-colors hover:text-neutral-700'>
					<Github />
				</a>
				<a
					href='https://github.com/Alexisxde/buttons-resource'
					target='_blank'
					rel='noopener noreferrer'
					className='h-6 w-6 text-white/85 transition-colors hover:text-neutral-700'>
					<X />
				</a>
			</nav>
		</header>
	)
}
