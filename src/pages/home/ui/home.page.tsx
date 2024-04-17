import {ProductsList} from "@/widgets/products";

const HomePage = () => {
    return (
        <div>
            <h1 className="text-3xl md:text-left text-center mb-10">
                Продукты
            </h1>
            <ProductsList/>
        </div>
    );
};

export default HomePage;