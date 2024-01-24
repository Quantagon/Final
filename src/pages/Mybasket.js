import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Investment from '../components/Investment'

function Mybasket({ setBasket, basket }) {
    const [data, setdata] = useState([
        {
            name: 'Storage Based',
            desc: 'This basket consists Storage based cryptos like ICP, Filecoin and BTT',
            desc2: 'This bucket Is handled by Pritham',
            title: 'Open for All',
            owner: 'Rahul'
            },
        {
            name: 'Metaverse',
            desc: 'This scheme consists of web3 metaverse project',
            desc2: 'Take premium sub to access this bucket',
            title: 'Premium',
            owner: 'Pragathi'
        }
    ])
    const [apidata, setApidata] = useState([])
    const [length, setlength] = useState(0)
    const [showbasket, setShowbasketdata] = useState()
    const basketHandler = () => {
        // setlength(showbasket.length)
        // const temp = [...apidata]
        // for (let i = 0; i < showbasket.length; i++) {
        //     temp.push({
        //         name: showbasket[i].title,
        //         desc: showbasket[i].description,
        //         desc2: showbasket[i].long_description,
        //         title: showbasket[i].title
        //     })
            // setdata(temp)
            console.log(data)
            setApidata(data)
        // }


    }
    const name = []

    useEffect(() => {
        var email = "salmanpary@gmail.com"

        axios.post('https://buidl11-backend.salmanpary.repl.co/getprice/users_basket', { "email": "salmanpary@gmail.com" }).then((res) => setShowbasketdata(res.data.baskets)).catch((err) => console.log(err))
    }, [])
    console.log(showbasket);


    return (
        <div className='mt-12'>
            <button className='btn mb-12' onClick={basketHandler}>Show Baskets</button>


            {apidata.map((datas) => (
                <>
                <h1 className='text-2xl font-medium text-white text-center'>{datas.owner}</h1>
                    <Investment setBasket={setBasket} basket={basket} title={datas.name} des={datas.desc} tag={datas.title} tagdes={datas.desc2} />
                </>
            ))}


        </div>
    )
}

export default Mybasket;