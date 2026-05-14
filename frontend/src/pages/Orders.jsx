import { useEffect, useState } from "react";

import API from "../services/api";

import Layout from "../components/Layout";
import LoadingSpinner from "../components/LoadingSpinner";
import AnalyticsCard from "../components/AnalyticsCard";
import PageHeader from "../components/PageHeader";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";

function Orders() {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchOrders();

    }, []);

    const fetchOrders = async () => {

        try {

            const response = await API.get("/daily-orders");

            setOrders(response.data);

            setLoading(false);

        } catch (error) {

            console.error(error);

            setLoading(false);
        }
    };

    return (

        <Layout>

            <PageHeader
                title="Orders Analytics"
                subtitle="Daily order trends"
            />

            {loading ? (

                <LoadingSpinner />

            ) : (

                <AnalyticsCard title="Daily Orders">

                    <div className="w-full h-[500px]">

                        <ResponsiveContainer width="100%" height="100%">

                            <LineChart data={orders}>

                                <CartesianGrid strokeDasharray="3 3" />

                                <XAxis dataKey="order_date" />

                                <YAxis />

                                <Tooltip />

                                <Line
                                    type="monotone"
                                    dataKey="total_orders"
                                    stroke="#10b981"
                                    strokeWidth={3}
                                />

                            </LineChart>

                        </ResponsiveContainer>

                    </div>

                </AnalyticsCard>

            )}

        </Layout>

    );
}

export default Orders;