import React, { useContext } from 'react'
import { WishlistContext } from '../../context/wishlistContext'
import { useNavigate } from 'react-router-dom';
import styles from "./index.module.css"
import { FaHeart } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { Helmet } from 'react-helmet-async';
const Wishlist = () => {
  const navigate = useNavigate(null);
  const { favorites, toggleWishlist } = useContext(WishlistContext)


  const getDetail = (id) => {
    navigate(`/${id}`);
  }

  return (
    <>
      <Helmet >
        <title>Wishlist</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="container">
        <div className="row">
          {favorites && favorites.map((p) => (
            <div className="col-4 col-sm-12" key={p._id}>
              <div className={styles.dynamicCard}>
                <div className={styles.cardImage}>
                  <img src={p.imgUrl} alt={p.name} />
                  <button onClick={() => toggleWishlist(p)
                  }>{favorites.find((f) => f._id === p._id) ? <FaHeart /> : <CiHeart />}</button>
                </div>
                <div className={styles.cardTitle}>
                  <h4>{p.name}</h4>
                  <p>{p.description}</p>
                  <span>${p.price}</span>
                  <button onClick={() => getDetail(p._id)}>Detail</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div >
    </>
  )
}

export default Wishlist