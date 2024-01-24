import React, { useEffect, useState } from 'react'
import Investment from '../components/Investment'
import '../assets/investment.css'
import { GoVerified } from 'react-icons/go'
import { ImBookmarks } from 'react-icons/im'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { GiCoffeeMug } from 'react-icons/gi'
import axios from 'axios'
import '../assets/3d.css'

function Home({ setBasket, basket }) {
    const [disabled, setDisabled] = useState(false)

    const [showbasket, setShowbasketdata] = useState()
    const [data, setdata] = useState([
        {
            name: 'Storage Based',
            desc: 'This basket consists Storage based cryptos like ICP, Filecoin and BTT',
            desc2: 'This bucket Is handled by Pritham',
            title: 'Open for All'
        },
        {
            name: 'Bluechips',
            desc: 'This basket consists of 50% BTC and 50% ETH, These are higher marketcap coins',
            desc2: 'This Basket is Managed by Rahul',
            title: 'Popular'
        },
        {
            name: 'Flaming hot',
            desc: 'This contains GLMR,IMX,JOE',
            desc2: 'This scheme has crossed over 20k users',
            title: 'Premium'
        },
        {
            name: 'Metaverse',
            desc: 'This scheme consists of web3 metaverse project',
            desc2: 'Take premium sub to access this bucket',
            title: 'Premium'
        }
    ])
    const [apidata, setApidata] = useState([])
    const [ar, setar] = useState({})
    const [length, setlength] = useState(0)
    useEffect(() => {
        let priceIntervel = setInterval(() => {
            axios.get('https://fineazy.herokuapp.com/getprice/5').then(res => { setar(res.data) }).catch(err => { console.log(err) })

        }, 3000)
        return () => {
            clearInterval(priceIntervel)
        }


    }, [])

    useEffect(() => {
        axios.get('https://buidl11-backend.salmanpary.repl.co/getprice/show_basket').then((res) => setShowbasketdata(res.data.baskets)).catch((err) => console.log(err))

    }, [])
    const basketHandler = () => {
        setlength(showbasket.length)

        const temp = [...apidata]

        for (let i = 0; i < showbasket.length; i++) {
            
            temp.push({
                name: showbasket[i].title,
                desc: showbasket[i].description,
                desc2: showbasket[i].long_description,
                title: showbasket[i].title
            })

            // setdata(temp)
            setApidata(temp)

        }


    }


    return (
        <div>

            <div className="Home_overview blue-glassmorphism flex justify-between bg-slate-100 mx-auto p-8 text-left mb-12 rounded-lg box_3d mt-12" >

                <div className="">
                    <h3 className='text-2xl text-blue-600 font-bold'>Overview</h3>
                    <h5 className='text-md  text-gray-300'>Markets | investments</h5>
                </div>
                <div className="">
                    <h4 className='font-bold text-blue-600'>BTC</h4>
                    {
                        ar?.BTCUSDT?.BTCUSDT ?
                            <h3 className='text-2xl font-bold  text-green-500'>{parseFloat(ar.BTCUSDT.BTCUSDT).toFixed(2)}</h3>
                            :
                            <h3 className='text-2xl font-medium text-white'>Loading...</h3>
                    }
                </div>
                <div className="">
                    <h4 className=" text-blue-600 font-bold  ">Current Value</h4>
                    <h3 className='font-bold text-xl text-green-500'>$24.5</h3>
                </div>
                <div className="">
                    <h4 className=" text-blue-600 font-bold">Current Returns</h4>
                    <h3 className='font-bold text-xl text-green-500'>+5%</h3>
                </div>
                <div className="">
                    <button className=' text-white px-6 py-2 rounded hover:px-7 hover:py-3 my-2 blue_3d' type="submit">Explore Baskets</button>
                </div>
            </div>
            <h3 className='text-3xl mb-8 font-bold text-left ml-20 text-blue-800 text-gradient'>Investment Baskets</h3>
            <div className="flex lg:ml-20">
                <div className="">
                    <div className="text-2xl my-8 text-center font-medium text-white">
                        Trending
                    </div>
                    {data.map((datas) => (
                        <>
                            {/* {datas.name === 'Bluechips' ? () => { setDisabled(false) } : () => setDisabled(true)} */}
                            <Investment disabled={disabled} setBasket={setBasket} basket={basket} title={datas.name} des={datas.desc} tag={datas.title} tagdes={datas.desc2} />
                        </>
                    ))}

                    <div className="">
                        <div className="text-2xl my-8 text-center font-semibold">
                            Public Favourites
                        </div>

                        {apidata.map((datas) => (
                            <>
                                {/* {datas.name === 'Bluechips' ? () => { setDisabled(false) } : () => setDisabled(true)} */}
                                <Investment disabled={disabled} setBasket={setBasket} basket={basket} title={datas.name} des={datas.desc} tag={datas.title} tagdes={datas.desc2} />
                            </>
                        ))}


                    </div>

                </div>


                <div className="Home_container2 p-6 ml-10 mr-4 text-left rounded box_3d">
                    <h3 className='font-bold mb-4 text-gray-100'>How to start investing in a Basket</h3>
                    <h5 className='mb-5 flex items-center text-gray-100'><GoVerified className='text mt-1 text-green-400' /> &nbsp; Viewed Home</h5>
                    <h5 className='mb-5 flex items-center text-gray-100'><ImBookmarks className='text mt-1 ' /> &nbsp; Watchlist a Basket</h5>
                    <h5 className='mb-5 flex items-center text-gray-100'><BsFillBriefcaseFill className='text mt-1 ' /> &nbsp; Invest in Basket</h5>
                    <h5 className='mb-5 flex items-center text-gray-100'><GiCoffeeMug className='text mt-1 ' /> &nbsp; Start SIP</h5>

                </div>

            </div>
            <button className='btn mb-10' onClick={basketHandler}>SHOW MORE</button>


        </div>

    )
}

export default Home