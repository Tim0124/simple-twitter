import axios from 'axios'
import Swal from 'sweetalert2'

const baseURL = 'https://twitter-ac-daniel-4bc657e8f005.herokuapp.com/api'

export const apiHelper = axios.create({
	baseURL,
})

export const Toast = Swal.mixin({
	toast: true,
	position: 'top-end',
	showConfirmButton: false,
	timer: 1500,
})

export const ToastAlert = Swal.mixin({
	position: 'top',
	showConfirmButton: true,
})

//其他頁面要使用的話
// Toast.fire({
//   title:...
// })
