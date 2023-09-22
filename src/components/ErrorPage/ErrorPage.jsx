import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError()

    const navigate = useNavigate()

    const handleGoHome = () => {
        navigate(`/`)
    }

    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-16 lg:px-24 text-center">
            <h2 className="text-2xl font-bold">Oofsssss!!!</h2>
            {
                error.statusText || error.message
            }

            {
                error.status === 404 && <div>
                    <h2>Go Back to Home</h2>
                    <button onClick={handleGoHome} className='bg-green-700 text-white font-bold px-2 text-xl py-1 rounded-md'>Go Home</button>
                </div>
            }


        </div>
    );
};

export default ErrorPage;