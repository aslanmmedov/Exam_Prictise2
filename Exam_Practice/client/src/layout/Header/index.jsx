import React, { useContext } from 'react'
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./index.module.css"
import { WishlistContext } from '../../context/wishlistContext';
import { IoMenuOutline } from "react-icons/io5";
const Header = () => {
    const { favorites, toggleWishlist } = useContext(WishlistContext)
    return (
        <>
            <header>
                <nav>
                    <div className="container">
                        <div className="row">
                            <div className="col-4 col-sm-12">
                                <div className={styles.logo}>
                                    <h3>SHOPPERS</h3>
                                </div>
                            </div>
                            <div className="col-4 col-sm-6">
                                <div className={styles.search}>
                                    <FaSearch />
                                    <input type="text" placeholder='Search' />
                                </div>
                            </div>


                            <div className='col-4 col-sm-6'>
                                <div className={styles.routes}>
                                    <ul>
                                        <li><IoPersonCircleSharp /></li>
                                        <li><NavLink to="wishlist"><FaHeart /><sup>{favorites.length}</sup></NavLink></li>
                                        <li><FaShoppingCart /></li>
                                        <li><IoMenuOutline /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className={styles.pages}>
                            <ul>
                                <li><NavLink to="">Home</NavLink></li>
                                <li><NavLink to="wishlist">Wishlist <sup>{favorites.length}</sup></NavLink></li>
                                <li><NavLink to="add">Add</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header