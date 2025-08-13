import { useState } from 'react'

const Login = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault()
		// Fake login
		if (username && password) {
			localStorage.setItem('token', 'fake-token')
			window.location.href = '/'
		}
	}
	return (
		<form
			onSubmit={handleLogin}
			className='bg-white p-6 rounded shadow w-96 space-y-4'
		>
			<h2 className='text-xl font-semibold text-center'>Login</h2>
			<input
				type='text'
				placeholder='Username'
				className='border p-2 w-full'
				value={username}
				onChange={e => setUsername(e.target.value)}
			/>
			<input
				type='password'
				placeholder='Password'
				className='border p-2 w-full'
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<button className='bg-blue-500 text-white px-4 py-2 w-full rounded'>
				Login
			</button>
		</form>
	)
}

export default Login
