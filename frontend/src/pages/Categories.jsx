import { useEffect, useState } from "react";

import API from "../services/api";

import Layout from "../components/Layout";
import LoadingSpinner from "../components/LoadingSpinner";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";

function Categories() {

    // Categories state
    const [categoryData, setCategoryData] = useState([]);

    // Loading state
    const [loading, setLoading] = useState(true);

    // Load data when page opens
    useEffect(() => {

        fetchCategories();

    }, []);

    // Fetch categories data
    const fetchCategories = async () => {

        try {

            setLoading(true);

            const response = await API.get(
                "/top-categories"
            );

            setCategoryData(response.data);

            setLoading(false);

        } catch (error) {

            console.error(
                "Error fetching category data:",
                error
            );

            setLoading(false);
        }
    };

    return (

        <Layout>

            {/* Page Header */}
            <div className="mb-8">

                <h1 className="text-4xl font-bold text-gray-800">
                    Product Categories Analytics
                </h1>

                <p className="text-gray-500 mt-2">
                    Top performing product categories by revenue
                </p>

            </div>

            {/* Loading State */}
            {loading ? (

                <LoadingSpinner />

            ) : (

                <div className="bg-white rounded-2xl shadow-md p-6">

                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        Top Categories Revenue
                    </h2>

                    {/* Chart */}
                    <div className="w-full h-[500px]">

                        <ResponsiveContainer width="100%" height="100%">

                            <BarChart
                                data={categoryData}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 120
                                }}
                            >

                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    stroke="#e5e7eb"
                                />

                                <XAxis
                                    dataKey="product_category_name"
                                    angle={-35}
                                    textAnchor="end"
                                    interval={0}
                                    height={120}
                                    tick={{
                                        fill: "#6b7280",
                                        fontSize: 12
                                    }}
                                />

                                <YAxis
                                    tick={{
                                        fill: "#6b7280",
                                        fontSize: 12
                                    }}
                                />

                                <Tooltip
                                    formatter={(value) =>
                                        `$${Number(value).toLocaleString()}`
                                    }
                                    contentStyle={{
                                        backgroundColor: "#ffffff",
                                        borderRadius: "12px",
                                        border: "1px solid #e5e7eb"
                                    }}
                                />

                                <Bar
                                    dataKey="total_revenue"
                                    fill="#2563eb"
                                    radius={[8, 8, 0, 0]}
                                />

                            </BarChart>

                        </ResponsiveContainer>

                    </div>

                </div>

            )}

        </Layout>

    );
}

export default Categories;