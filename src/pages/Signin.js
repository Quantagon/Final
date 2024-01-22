import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Signin() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        api_key: '',
        api_secret: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })


    }
    const handleSubmit = () => {
        const { email, password, name, api_key, api_secret } = user;
        if (user.password.length != '' && user.api_key != '' && user.email != '' && user.name != '' && user.api_secret != '') {
            axios.post('https://buidl11-backend.salmanpary.repl.co/auth/signup', user).then((res) => {
                console.log(res)


                navigate('/home2')


            }).catch((err) => console.log(err))
            console.log(user);

        } else {
            alert('Every field is necessary')
        }
    }
    return (
        <div className="flex m-auto mt-10 items-center justify-center ">
            <div class="w-full  max-w-xs">
                <form class="bg-white box_3d shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-blue-800 text-sm font-bold mb-2" for="username">
                            Name
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='name' value={user.name} onChange={handleChange} id="username" type="text" placeholder="Username" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-blue-800 text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name='email' value={user.email} onChange={handleChange} type="text" placeholder="example@gmail.com" />
                    </div>

                    <div class="mb-6">
                        <label class="block text-blue-800 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" name='password' value={user.password} onChange={handleChange} id="password" type="password" placeholder="******************" />
                        {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
                    </div>
                    <div class="mb-4">
                        <label class="block text-blue-800 text-sm font-bold mb-2" for="apikey">
                            API_Key
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="apikey" name='api_key' type="text" value={user.api_key} onChange={handleChange} placeholder="16APY355..." />
                    </div>
                    <div class="mb-4">
                        <label class="block text-blue-800 text-sm font-bold mb-2" for="apisecret">
                            API_Secret
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="apisecret" name='api_secret' value={user.api_secret} onChange={handleChange} type="text" placeholder="16APY355.." />
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-blue-800 blue_3d hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>
                            Sign In
                        </button>
                        <a class="inline-block align-baseline font-bold text-sm text-blue-800 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Signin