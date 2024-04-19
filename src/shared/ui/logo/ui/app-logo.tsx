import React from 'react';
import {useNavigate} from "react-router-dom";
import {getRouteHome} from "@/shared/const/router-const";

const AppLogo = () => {

    const navigate = useNavigate()

    return (
        <div onClick={()=>navigate(getRouteHome())} className="text-white cursor-pointer font-black">
            VBox
        </div>
    );
};

export default AppLogo;