import { useEffect, useState } from "react";

import API from "../services/api";

import Layout from "../components/Layout";
import LoadingSpinner from "../components/LoadingSpinner";
import AnalyticsCard from "../components/AnalyticsCard";
import PageHeader from "../components/PageHeader";

function Payments() {

    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchPayments();

    }, []);

    const fetchPayments = async () => {

        try {

            const response = await API.get("/payment-analysis");

            setPayments(response.data);

            setLoading(false);

        } catch (error) {

            console.error(error);

            setLoading(false);
        }
    };

    return (

        <Layout>

            <PageHeader
                title="Payment Analytics"
                subtitle="Payment method insights"
            />

            {loading ? (

                <LoadingSpinner />

            ) : (

                <AnalyticsCard title="Payment Analysis">

                    <div className="overflow-x-auto">

                        <table className="min-w-full">

                            <thead>

                                <tr className="border-b">

                                    <th className="text-left py-3">
                                        Payment Type
                                    </th>

                                    <th className="text-left py-3">
                                        Transactions
                                    </th>

                                    <th className="text-left py-3">
                                        Revenue
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {payments.map((item, index) => (

                                    <tr key={index} className="border-b">

                                        <td className="py-3">
                                            {item.payment_type}
                                        </td>

                                        <td className="py-3">
                                            {item.total_transactions}
                                        </td>

                                        <td className="py-3">
                                            ${Number(item.total_revenue).toLocaleString()}
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

export default Payments;