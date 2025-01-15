import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { WishlistContext } from '../../context/wishlistContext';
import { FaHeart } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import axios from 'axios';
import { BASE_URL, endpoints } from '../../constants/constants';
import styles from "./index.module.css"
import { Helmet } from 'react-helmet-async';

const Detail = () => {
  const navigate = useNavigate(null);
  const [product, setProduct] = useState({});
  const { id } = useParams()
  const { favorites, toggleWishlist } = useContext(WishlistContext)

  const getDataById = async () => {
    const { data } = await axios(`${BASE_URL}/${endpoints.shoes}/${id}`);
    setProduct(data.data)
  }
  useEffect(() => {
    getDataById();
  }, [])

  const getDetail = (id) => {
    navigate(-1);
  }
  return (
    <>
      <Helmet >
        <title>{product.name}</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="container">
        <div className="row">
          {product &&
            <div className="col-4 col-sm-12" key={product._id}>
              <div className={styles.dynamicCard}>
                <div className={styles.cardImage}>
                  <img src={product.imgUrl} alt={product.name} />
                  <button onClick={() => toggleWishlist(product)
                  }>{favorites.find((f) => f._id === product._id) ? <FaHeart /> : <CiHeart />}</button>
                </div>
                <div className={styles.cardTitle}>
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <span>${product.price}</span>
                  <button onClick={() => getDetail()}>Back</button>
                </div>
              </div>
            </div>
          }
        </div>
      </div >
    </>
  )
}

export default Detail