import {FC, ReactNode} from "react";
import {Navbar} from "@/widgets/navbar";
import {Content} from "antd/es/layout/layout";

interface BaseLayoutProps {
    children?: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({children}) => {
    return (
        <div>
            <Navbar/>
            <Content className="container mx-auto px-10 py-20">
                {children}
            </Content>
        </div>
    );
};

export default BaseLayout;