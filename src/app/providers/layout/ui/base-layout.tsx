import {FC, ReactNode} from "react";
import {Navbar} from "@/widgets/navbar";
import {Footer} from "@/widgets/footer";

interface BaseLayoutProps {
    children?: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default BaseLayout;