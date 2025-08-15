import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CustomInput } from '@/components/ui/custom-input'
import { LoginBgImage } from '@/assets/images'

export default function Login() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

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
			className='w-full min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6 lg:px-8'
			style={{ backgroundImage: `url(${LoginBgImage})` }}
		>
			<form
				onSubmit={handleLogin}
				className='w-full max-w-sm sm:max-w-md bg-white rounded-[20px] sm:rounded-[28px] shadow-[0px_0px_1px_0px_#1C293D14] px-5 sm:px-6 md:px-8 py-6 sm:py-8 space-y-5'
			>
				{/* Title */}
				<div className='text-center space-y-1'>
					<h2 className='font-bold text-[24px] sm:text-[28px] md:text-[32px] leading-[120%] tracking-[0] text-[#282F3D]'>
						Tizimga kirish
					</h2>
					<p className='font-medium text-[14px] sm:text-[15px] md:text-[16px] leading-[150%] tracking-[0] text-center align-middle text-[#0F132499]'>
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
				</div>

				{/* Submit */}
				<Button
					type='submit'
					className='w-full bg-[#12B76A] hover:bg-[#4ac48b] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
					disabled={isDisabled}
				>
					Kirish
				</Button>
			</form>
		</div>
	)
}
