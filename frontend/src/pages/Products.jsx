import { useEffect, useState } from "react";

import API from "../services/api";

import Layout from "../components/Layout";
import LoadingSpinner from "../components/LoadingSpinner";
import AnalyticsCard from "../components/AnalyticsCard";
import PageHeader from "../components/PageHeader";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";

function Products() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchProducts();

    }, []);

    const fetchProducts = async () => {

        try {

            const response = await API.get("/top-products");

            setProducts(response.data);

            setLoading(false);

        } catch (error) {

            console.error(error);

            setLoading(false);
        }
    };

    return (

        <Layout>

            <PageHeader
                title="Products Analytics"
                subtitle="Top performing products by revenue"
            />

            {loading ? (

                <LoadingSpinner />

            ) : (

                <AnalyticsCard title="Top Products">

                    <div className="w-full h-[500px]">

                        <ResponsiveContainer width="100%" height="100%">

                            <BarChart data={products}>

                                <CartesianGrid strokeDasharray="3 3" />

                                <XAxis
                                    dataKey="product_category_name"
                                    angle={-35}
                                    textAnchor="end"
                                    interval={0}
                                    height={120}
                                />

                                <YAxis />

                                <Tooltip />

                                <Bar
                                    dataKey="total_revenue"
                                    fill="#2563eb"
                                />

                            </BarChart>

                        </ResponsiveContainer>

                    </div>

                </AnalyticsCard>

            )}

        </Layout>

    );
}

export default Products;