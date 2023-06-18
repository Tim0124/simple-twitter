import { Link, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from 'context/AuthContext'
import AdminForm from 'components/admin/AdminForm'

export default function AdminLogin() {
	const { isAuthenticated } = useContext(AuthContext)
	const navigate = useNavigate()

	useEffect(() => {
		if (isAuthenticated) {
			navigate('/tweets')
		}
	}, [])

	return (
		<>
			<AdminForm />
		</>
	)
}
