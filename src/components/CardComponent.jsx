import { useState } from 'react'
import { flushSync } from 'react-dom'
import { createRoot } from 'react-dom/client'
import Clipboard from '@icons/Clipboard'

export default function CardComponent({ children }) {
	const [copy, setCopy] = useState(false)

	const getCode = () => {
		const div = document.createElement('div')
		const root = createRoot(div)
		flushSync(() => {
			root.render(children)
		})
		const code = div.innerHTML
		return code
	}

	const copyCode = () => {
		const code = getCode()
		navigator.clipboard.writeText(code)
		setCopy(true)
		setTimeout(() => {
			setCopy(false)
		}, 750)
	}

	return (
		<div className='relative flex items-center justify-center rounded-xl border border-gray-900 bg-neutral-950/60 px-8 py-32 text-white animate-appear'>
			<span className='absolute right-5 top-4 text-xs text-gray-400'>
				{!copy ? (
					<button
						className='py-1 inline-flex items-center gap-1'
						onClick={copyCode}>
						<Clipboard className='w-4 h-4' />
						Copy code
					</button>
				) : (
					<button className='py-1 inline-flex items-center gap-1'>
						<Clipboard className='w-4 h-4' />
						Copied code!
					</button>
				)}
			</span>
			<div className='z-0'>{children}</div>
		</div>
	)
}
