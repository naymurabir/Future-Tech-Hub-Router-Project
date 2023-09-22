import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ThreeDots } from "react-loader-spinner";

const Home = () => {

    const navigation = useNavigation()

    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-16 lg:px-24">
            <Header></Header>

            <div className="min-h-screen">
                {
                    navigation.state === 'loading' ? <ThreeDots></ThreeDots> : <Outlet></Outlet>
                }
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;