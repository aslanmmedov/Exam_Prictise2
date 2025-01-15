import { createContext, useState } from 'react';
import React from 'react'


export const WishlistContext = createContext(null);

const WishlistProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const toggleWishlist = (product) => {

        const idx = favorites.findIndex((p) => p._id === product._id);

        if (idx !== -1) {
            setFavorites((prev) => prev.filter((f) => f._id !== product._id))
        }
        else {
            setFavorites((prev) => [...prev, product ])
        }
    }
    return (
        <WishlistContext.Provider value={{ favorites, toggleWishlist }}>{children}</WishlistContext.Provider>
    )
}

export default WishlistProvider