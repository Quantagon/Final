import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { storeinfo } from "../features/friends/friends";
const
    FriendsFollow = ({ data, f }) => {
        const friend = useSelector(state => state.friends)
        // const email = useSelector(state => state.user.email)
        const navigate = useNavigate()
        const dispatch = useDispatch()
        const [follow, setFollow] = useState(true)


        const followHandler = async () => {
            let body = {
                email: "adamrubiks@gmail.com",
                friend: data.name

            }
            const resp = await axios.post('https://buidl11-backend.salmanpary.repl.co/auth/add_friend', body)

            setFollow(false)
        }
        const unFollowHandler = async () => {
            let body = {
                email: "adamrubiks@gmail.com",
                friend: data.name

            }
            const resp = await axios.post('https://buidl11-backend.salmanpary.repl.co/auth/remove_friend', body)
        }
        useEffect(() => {
            setFollow(f)
        }, [])
        return (
            <div className="rounded-lg box_3d bg-slate-300 w-50 h-auto m-4">
                <p className="m-4 mb-0 p-2 text-base text-center text-black">{data.name}</p>
                <div className="flex items-center justify-center">
                    <img src="http://www.alfaboilers.com/wp-content/uploads/2018/02/t2-458x450.jpg" className="rounded-full w-20 h-20"></img>
                </div>
                <p className="m-4 text-xs text-gray-600 text-center ">{data.followers} followers</p>
                <div className="flex items-center justify-center ">
                    {/* <button className={`${btnbgcolor} hover:${btnhover} ${border} ${fontcolor} font-bold py-2 px-8 rounded-3xl text-xs flex items-center justify-center`} onClick={change}>{btntext}</button> */}
                    {follow ? <button onClick={followHandler} className="font-bold mb-2 py-2 px-8 rounded-3xl bg-blue-700 hover:bg-blue-500 text-xs text-white flex items-center justify-center">Follow</button> :
                        <div className="flex flex-col">
                            <button onClick={unFollowHandler} className="font-bold py-2 px-8 border-solid border-2 text-blue-800 border-blue-800 rounded-3xl bg-white hover:bg-gray-100 text-xs text-white flex items-center justify-center">Following</button>
                            <button onClick={() => {
                                dispatch(storeinfo(data))
                                navigate('/viewprofile')
                            }} className=" font-bold py-2 px-8 border-solid border-2 text-blue-800 border-blue-800 my-2 rounded-3xl bg-white hover:bg-gray-100 text-xs text-white flex items-center justify-center">View Profile</button>
                        </div>}
                </div>
            </div>
        )
    }

export default FriendsFollow