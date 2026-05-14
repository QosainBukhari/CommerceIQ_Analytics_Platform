import { useEffect, useState } from "react";

import API from "../services/api";

import Layout from "../components/Layout";
import LoadingSpinner from "../components/LoadingSpinner";
import AnalyticsCard from "../components/AnalyticsCard";
import PageHeader from "../components/PageHeader";

function Sellers() {

    const [sellers, setSellers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchSellers();

    }, []);

    const fetchSellers = async () => {

        try {

            const response = await API.get("/top-sellers");

            setSellers(response.data);

            setLoading(false);

        } catch (error) {

            console.error(error);

            setLoading(false);
        }
    };

    return (

        <Layout>

            <PageHeader
                title="Sellers Analytics"
                subtitle="Top marketplace sellers"
            />

            {loading ? (

                <LoadingSpinner />

            ) : (

                <AnalyticsCard title="Top Sellers">

                    <div className="overflow-x-auto">

                        <table className="min-w-full">

                            <thead>

                                <tr className="border-b">

                                    <th className="text-left py-3">
                                        Seller
                                    </th>

                                    <th className="text-left py-3">
                                        State
                                    </th>

                                    <th className="text-left py-3">
                                        Revenue
                                    </th>

                                    <th className="text-left py-3">
                                        Orders
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {sellers.map((item, index) => (

                                    <tr key={index} className="border-b">

                                        <td className="py-3">
                                            {item.seller_id}
                                        </td>

                                        <td className="py-3">
                                            {item.seller_state}
                                        </td>

                                        <td className="py-3">
                                            ${Number(item.total_revenue).toLocaleString()}
                                        </td>

                                        <td className="py-3">
                                            {item.total_orders}
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </AnalyticsCard>

            )}

        </Layout>

    );
}

export default Sellers;