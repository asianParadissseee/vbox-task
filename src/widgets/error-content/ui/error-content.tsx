import {Button, Result} from "antd";

const ErrorContent = () => {

    const reloadPage = () => {
        location.reload()
    }
    return (
        <Result
            title="Произошла ошибка зайдите позже или перезагрузите страницу"
            extra={
                <Button onClick={reloadPage} type="primary" key="console">
                    Перезагрузить
                </Button>
            }
        />
    );
};

export default ErrorContent;