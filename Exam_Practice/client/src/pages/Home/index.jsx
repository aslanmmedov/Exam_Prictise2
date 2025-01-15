import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";
import styles from "./index.module.css"
import { BASE_URL, endpoints } from '../../constants/constants';
import { FaHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { WishlistContext } from '../../context/wishlistContext';
import { CiHeart } from "react-icons/ci";
import { Helmet } from 'react-helmet-async';
import { FaTruck } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { FaRegQuestionCircle } from "react-icons/fa";
const Home = () => {
    const navigate = useNavigate(null);
    const { favorites, toggleWishlist } = useContext(WishlistContext)
    const [products, setProducts] = useState(null);

    const getAllData = async () => {
        const { data } = await axios(`${BASE_URL}/${endpoints.shoes}`);
        setProducts(data.data)
    }


    useEffect(() => {
        getAllData();
    }, [])

    const getDetail = (id) => {
        navigate(`/${id}`);
    }

    return (
        <>
            <Helmet >
                <title>Home Page</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <main>
                <div className={styles.heroBanner}>
                    <h2>Finding Your Perfect Shoes</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla. </p>
                    <button>SHOP NOW</button>
                </div>
            </main>
            <section>
                <div className="container">
                    <div className="row">
                        <div className={styles.infoCards}>
                            <div className="col-4 col-sm-12">
                                <div className={styles.infoCard}>
                                    <span><FaTruck /></span>
                                    <h4>FREE SHIPPING</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                                </div>
                            </div>
                            <div className="col-4 col-sm-12">
                                <div className={styles.infoCard}>
                                    <span><GiReturnArrow /></span>
                                    <h4>FREE SHIPPING</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                                </div>
                            </div>
                            <div className="col-4 col-sm-12">
                                <div className={styles.infoCard}>
                                    <span><FaRegQuestionCircle /></span>
                                    <h4>FREE SHIPPING</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className={styles.collectionCards}>
                            <div className="col-4 col-sm-12">
                                <div className={styles.collectionCard1}>
                                    <h5>COLLECTIONS</h5>
                                    <h1>Women</h1>
                                </div>
                            </div>
                            <div className="col-4 col-sm-12">
                                <div className={styles.collectionCard2}>
                                    <h5>COLLECTIONS</h5>
                                    <h1>Children</h1>
                                </div>
                            </div>
                            <div className="col-4 col-sm-12">
                                <div className={styles.collectionCard3}>
                                    <h5>COLLECTIONS</h5>
                                    <h1>Men</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.gray}>
                <div className="container">
                    <div className={styles.head}>
                        <h2>Featured Products</h2>
                    </div>
                    <div className="row">
                        {products && products.map((p) => (
                            <div className="col-4 col-sm-12" key={p._id}>
                                <div className={styles.dynamicCard}>
                                    <div className={styles.cardImage}>
                                        <img src={p.imgUrl} alt={p.name} />
                                    </div>
                                    <div className={styles.cardTitle}>
                                        <h4>{p.name}</h4>
                                        <p>{p.description}</p>
                                        <span>${p.price}</span>
                                        <div className={styles.btns}>
                                            <button onClick={() => getDetail(p._id)}>Detail</button>
                                            <button onClick={() => toggleWishlist(p)
                                            }>{favorites.find((f) => f._id === p._id) ? <FaHeart /> : <CiHeart />}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div >
            </section>
            <section>
            <div className={styles.head}>
                        <h2>Big Sale!</h2>
                    </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-sm-12">
                        <div className={styles.bigSalesHead}>
                            <img src="https://preview.colorlib.com/theme/shoppers/images/blog_1.jpg" alt="" />
                        </div>
                        </div>
                        <div className="col-6 col-sm-12">
                        <div className={styles.bigSalesBody}>
                            <h2>50% less in all items</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p>
                            <button>SHOP NOW</button>
                        </div>
                        </div>
                        
                    </div>
                </div>

            </section>

        </>
    )
}

export default Home