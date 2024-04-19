import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Layout} from "antd";
import {AppLogo} from "@/shared/ui/logo";
import {ShoppingOutlined} from "@ant-design/icons";
import {getRouteCardBasket} from "@/shared/const/router-const";
import {getToggleBasketItems} from "@/features/toggle-basket";

const Navbar = () => {

    const navigate = useNavigate()
    const getQuantity = useSelector(getToggleBasketItems)
    const handleNavigate = () => {
        navigate(getRouteCardBasket())
    }

    return (
        <Layout.Header className="shadow-xl">
            <div className="container flex justify-between items-center mx-auto px-10">
                <AppLogo/>
                <div className="flex justify-center items-center gap-3">
                    <p className="w-4 h-4 rounded-full p-3 flex justify-center bg-white items-center">{getQuantity.length}</p>
                    <ShoppingOutlined onClick={handleNavigate} className={"text-white text-2xl"}/>
                </div>
            </div>
        </Layout.Header>
    );
};

export default Navbar;