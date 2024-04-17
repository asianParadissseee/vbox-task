import {Layout} from "antd";
import {AppLogo} from "@/shared/ui/logo";
import {ShoppingOutlined} from "@ant-design/icons";

const Navbar = () => {
    return (
        <Layout.Header className="shadow-xl">
            <div className="container flex justify-between items-center mx-auto px-10">
                <AppLogo/>
                <ShoppingOutlined className={"text-white text-2xl"} />
            </div>
        </Layout.Header>
    );
};

export default Navbar;