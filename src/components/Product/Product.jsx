import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {

    const { id, thumbnail, title, price, description } = product

    const navigate = useNavigate()

    const handleShowDetails = () => {
        navigate(`/products/${id}`)
    }

    return (

        <div className="card bg-base-100 shadow-xl px-2 py-4">
            <img className='w-full h-[220px] rounded-md' src={thumbnail} alt="Products" />
            <div className="card-body">
                <h2 className='text-xl font-bold'>{title}</h2>
                <p className='text-sm'>{description}</p>

                <h3 className='text-lg font-bold'>Price: ${price} </h3>
            </div >

            <button onClick={handleShowDetails} className='bg-green-700 text-white font-bold px-3 text-xl py-1 rounded-md'>Details</button>
        </div >
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired
}

export default Product;