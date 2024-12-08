import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string'
import Product from '../../API/Product';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SaleAPI from '../../API/SaleAPI';

Home_Category.propTypes = {
    GET_id_modal: PropTypes.func
};

Home_Category.defaultProps = {
    GET_id_modal: null
}

function Home_Category(props) {

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // Lấy func từ component cha chuyển xuống
    const { GET_id_modal } = props

    const [product_category, set_product_category] = useState([])

    useEffect(() => {

        const fetchData = async () => {

            const response = await SaleAPI.getList()

            set_product_category(response)

        }

        fetchData()

    }, [])


    return (
        <div className="product-area pt-60 pb-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="li-product-tab">
                            <ul className="nav li-product-menu">
                                <li><a className="active" data-toggle="tab" href="#"><span>Sale</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Slider {...settings}>

                    {
                        product_category && product_category.map(value => (
                            value?.id_product ? (
                                <div className="col-lg-12 animate__animated animate__zoomIn col_product" style={{ zIndex: '999', height: '30rem' }} key={value.id_product._id}>
                                    <div className="single-product-wrap">
                                        <div className="product-image">
                                            <Link to={`/detail/${value.id_product._id}`}>
                                                <img src={value.id_product.image} alt="Li's Product Image" />
                                            </Link>
                                            <span className="sticker">-{value.promotion}%</span>
                                        </div>
                                        <div className="product_desc">
                                            <div className="product_desc_info">
                                                <h5 className="manufacturer">
                                                    <a href="shop-left-sidebar.html">{value.id_product.name_product}</a>
                                                </h5>
                                                <div className="price-box">
                                                    <span className="new-price">{value.id_product.price_product} $</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        ))
                    }
                </Slider>
            </div>
        </div >
    );
}

export default Home_Category;

