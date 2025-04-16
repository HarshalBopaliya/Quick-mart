import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem.js';

const ProductList = () => {
    const [products, setProducts] = useState([]); // Original product list
    const [filteredProducts, setFilteredProducts] = useState([]); // Filtered & sorted list
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(5000);
    const [selectedType, setSelectedType] = useState('all');
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc' for sorting

    // Fetch products from backend when component mounts
    useEffect(() => {
        fetch('http://localhost:5000/api/products') // Adjust API endpoint if needed
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setFilteredProducts(data); // Initialize filtered products
            })
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    // Function to handle sorting by price
    const handleSortByPrice = () => {
        const sorted = [...filteredProducts].sort((a, b) =>
            sortOrder === 'asc' ? a.price - b.price : b.price - a.price
        );
        setFilteredProducts(sorted);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); // Toggle sort order
    };

    // Function to filter by price range
    const handleFilterByPriceRange = () => {
        const filtered = products.filter(
            (item) => item.price >= minPrice && item.price <= maxPrice
        );
        setFilteredProducts(filtered);
    };

    // Function to filter by type
    const handleFilterByType = () => {
        if (selectedType === 'all') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter((item) => item.type === selectedType);
            setFilteredProducts(filtered);
        }
    };

    return (
        <div className='prdt-list'>
            <h2>Product List</h2>

            {/* Filters and Sorting */}
            <div className='filter-btn'>
                <button onClick={handleSortByPrice}>
                    Sort by Price ({sortOrder === 'asc' ? 'Low to High' : 'High to Low'})
                </button>

                <label>
                    Min Price:
                    <input
                        type='number'
                        value={minPrice}
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                    />
                </label>
                <label>
                    Max Price:
                    <input
                        type='number'
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                    />
                </label>
                <button onClick={handleFilterByPriceRange}>Filter by Price Range</button>

                <label>
                    Filter by Type:
                    <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                        <option value='all'>All</option>
                        <option value='Men'>Men</option>
                        <option value='Women'>Women</option>
                    </select>
                </label>
                <button onClick={handleFilterByType}>Filter by Type</button>
            </div>

            {/* Product List */}
            <div className='product-list'>
                <div className='container carousel'>
                    <div className='row justify-content-center'>
                        {filteredProducts.map((product) => (
                            <div className='col-md-3' key={product._id}>
                                <ProductItem product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
