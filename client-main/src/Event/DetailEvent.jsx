import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CouponAPI from '../API/CouponAPI';
import './Event.css'

function DetailEvent(props) {

    const { id } = useParams()

    const [coupon, setCoupon] = useState({})

    useEffect(() => {

        const fetchData = async () => {

            const resposne = await CouponAPI.getCoupon(id)
            
            setCoupon(resposne)

        }

        fetchData()

    }, [id])

    return (
        <div>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Event</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container" style={{ marginTop: '3rem' }}>
                <h1 className="h4_event">{coupon.describe} With FEAR OF GOD!!!</h1>
                <div style={{ marginTop: '2rem' }}>
                    <a className="a_event">Coupon</a>
                </div>
                <div style={{ marginTop: '2rem'}}>
                    <span style={{ fontSize: '1.2rem', color: '#646464', fontWeight: 'bold' }}>Opportunity to get a FEAR OF GOD order coupon now!!</span>
                    <br />
                    <span style={{ fontSize: '1.05rem' }}>Just stop by FEAR OF GOD and buy an order will get a discount according to the code below:</span>
                    <li style={{ fontSize: '1.05rem' }}>Code: <i style={{ color: 'red' }}>{coupon.code}</i></li>
                    <li style={{ fontSize: '1.05rem' }}>Left: <i style={{ color: 'red' }}>{coupon.count}</i></li>
                    <span style={{ fontSize: '1.05rem' }}>You will enter the code in the APPLY COUPON box in your shopping cart.</span>
                    <br />
                    <span style={{ fontSize: '1.05rem'}}>Note: <i style={{ color: 'red' }}>Each code can only be used once.</i></span>
                </div>
                <div style={{ padding: '3rem 0' }}>
                    <img style={{ width: '100%' }} src="https://cdn.tgdd.vn/hoi-dap/1321785/banner-la-gi-khac-gi-voi-poster-cach-de-thiet-ke-mot%20(2).jpg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default DetailEvent;