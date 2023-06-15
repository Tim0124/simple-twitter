import Button from 'UIcomponents/buttons/Button'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import Input from 'UIcomponents/input/Input'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from 'context/AuthContext'
import authorization from 'api/authorization'
import AdminForm from 'components/admin/AdminForm'
import { Toast } from 'heplers/helpers'

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
			<AdminForm/>
		</>
	)
}
