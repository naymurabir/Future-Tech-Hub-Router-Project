import { useLoaderData, useNavigate } from "react-router-dom";

const ProductDetails = () => {

    const details = useLoaderData()
    const { thumbnail, title, discountPercentage, description, category, stock } = details

    const navigate = useNavigate()

    const handleGoHome = () => {
        navigate(`/products`)
    }

    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 my-8">

            <div className="md:w-[50%]">
                <img className="w-full md:h-[350px] rounded-md shadow-md" src={thumbnail} alt="" />
            </div>

            <div className="md:w-[50%] space-y-2">
                <h2 className="text-2xl font-bold">Title: {title}</h2>
                <h2 className="text-xl font-semibold">Category: {category}</h2>
                <p className="text-base font-semibold">Description: {description}</p>
                <h4 className="text-xl font-semibold">Available: {stock}</h4>
                <h4 className="text-xl font-semibold">Discounted Price: ${discountPercentage} </h4>

                <button onClick={handleGoHome} className='bg-green-700 text-white font-bold px-2 text-xl py-1 rounded-md'>Go Home</button>
            </div>
        </div>
    );
};

export default ProductDetails;