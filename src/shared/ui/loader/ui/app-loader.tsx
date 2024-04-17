import React from 'react';
import {Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

const AppLoader = () => {
    return (
            <div className="flex justify-center items-center mt-60">
                <Spin indicator={<LoadingOutlined className="text-2xl" spin/>}/>
            </div>
    );
};

export default AppLoader;