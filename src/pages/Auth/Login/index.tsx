import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CustomInput } from '@/components/ui/custom-input'
import { LoginBgImage } from '@/assets/images'

export default function Login() {
	const [username, setUsername] = useState('Fake admin')
	const [password, setPassword] = useState('admin')

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault()
		if (username && password) {
			localStorage.setItem('token', 'fake-token')
			window.location.href = '/'
		}
	}

	const isDisabled = !username.trim() || !password.trim()

	return (
		<div
			className='w-full min-h-screen flex items-center justify-center'
			style={{ backgroundImage: `url(${LoginBgImage})` }}
		>
			<form
				onSubmit={handleLogin}
				className='w-full max-w-sm bg-white rounded-[28px] shadow-[0px_0px_1px_0px_#1C293D14] px-6 py-8 space-y-5'
			>
				{/* Title */}
				<div className='text-center space-y-1'>
					<h2 className='font-bold text-[32px] leading-[120%] tracking-[0] text-[#282F3D]'>
						Tizimga kirish
					</h2>
					<p className='font-medium text-[16px] leading-[150%] tracking-[0] text-center align-middle text-[#0F132499]'>
						Login va parolingizni kiriting
					</p>
				</div>

				{/* Username */}
				<div className='space-y-1'>
					<CustomInput
						id='username'
						type='text'
						placeholder='Loginni kiriting'
						value={username}
						onChange={e => setUsername(e.target.value)}
					/>
					{/* <p className='text-xs text-gray-400'>
						This is a hint text to help user.
					</p> */}
				</div>

				{/* Password */}
				<div className='space-y-1'>
					<CustomInput
						id='password'
						type='password'
						placeholder='Parolni kiriting'
						value={password}
						onChange={e => setPassword(e.target.value)}
						showPasswordToggle
					/>
					{/* <p className='text-xs text-gray-400'>
						This is a hint text to help user.
					</p> */}
				</div>

				{/* Submit */}
				<Button
					type='submit'
					className='w-full bg-[#12B76A] hover:bg-[#4ac48b] cursor-pointer'
					disabled={isDisabled}
				>
					Kirish
				</Button>
			</form>
		</div>
	)
}
