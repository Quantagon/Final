import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()


    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })

    }

    const handleSubmit = () => {
        const { email, password } = user;
        // if (user.email != '' && user.password != '') {
        //     alert('Every field is necessary')
        // } else {
        axios.post('https://fineazy-backend.herokuapp.com/auth/login', user).then((res) => {
            console.log(res)

            navigate('/home2')

            // setUseremail = user.email

        }).catch((err) => console.log(err))
        // }
    }
    return (
        <div className='flex mt-24 justify-center items-center'>
            <div class="p-5 w-1/4 bg-white box_3d  max-w-xs">
                <form class=" pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-blue-800 text-sm font-bold mb-2" for="username">
                            Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" name='email' value={user.email} onChange={handleChange} placeholder="example@gmail.com" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-blue-800  text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name='password' value={user.password} type="password" onChange={handleChange} placeholder="******************" />

                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-blue-800 blue_3d hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>
                            Login
                        </button>
                        <a class="inline-block align-baseline font-bold text-sm text-blue-800  hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login