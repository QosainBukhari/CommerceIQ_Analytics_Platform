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

function Geography() {

    // Geography data state
    const [stateData, setStateData] = useState([]);

    // Loading state
    const [loading, setLoading] = useState(true);

    // Load data on page load
    useEffect(() => {

        fetchStates();

    }, []);

    // Fetch top states
    const fetchStates = async () => {

        try {

            setLoading(true);

            const response = await API.get(
                "/top-states"
            );

            setStateData(response.data);

            setLoading(false);

        } catch (error) {

            console.error(
                "Error fetching states data:",
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
                    Geography Analytics
                </h1>

                <p className="text-gray-500 mt-2">
                    Top customer states by total customers
                </p>

            </div>

            {/* Loading State */}
            {loading ? (

                <LoadingSpinner />

            ) : (

                <div className="bg-white rounded-2xl shadow-md p-6">

                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        Top States
                    </h2>

                    {/* Chart Container */}
                    <div className="w-full h-[500px]">

                        <ResponsiveContainer width="100%" height="100%">

                            <BarChart
                                data={stateData}
                                layout="vertical"
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 40,
                                    bottom: 20
                                }}
                            >

                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    stroke="#e5e7eb"
                                />

                                <XAxis
                                    type="number"
                                    tick={{
                                        fill: "#6b7280",
                                        fontSize: 12
                                    }}
                                />

                                <YAxis
                                    type="category"
                                    dataKey="customer_state"
                                    tick={{
                                        fill: "#6b7280",
                                        fontSize: 12
                                    }}
                                />

                                <Tooltip
                                    formatter={(value) =>
                                        Number(value).toLocaleString()
                                    }
                                    contentStyle={{
                                        backgroundColor: "#ffffff",
                                        borderRadius: "12px",
                                        border: "1px solid #e5e7eb"
                                    }}
                                />

                                <Bar
                                    dataKey="total_customers"
                                    fill="#10b981"
                                    radius={[0, 8, 8, 0]}
                                />

                            </BarChart>

                        </ResponsiveContainer>

                    </div>

                </div>

            )}

        </Layout>

    );
}

export default Geography;