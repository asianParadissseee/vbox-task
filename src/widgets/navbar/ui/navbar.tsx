import {Layout} from "antd";
import {AppLogo} from "@/shared/ui/logo";
import {ShoppingOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {getRouteCardBasket} from "@/shared/const/router-const";

const Navbar = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(getRouteCardBasket())
    }

    return (
        <Layout.Header className="shadow-xl">
            <div className="container flex justify-between items-center mx-auto px-10">
                <AppLogo/>
                <ShoppingOutlined onClick={handleNavigate} className={"text-white text-2xl"}/>
            </div>
        </Layout.Header>
    );
};

export default Navbar;