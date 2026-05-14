// React hooks
import { useEffect, useState } from "react";

// API connection
import API from "../services/api";

// Layout
import Layout from "../components/Layout";

// Reusable components
import RevenueTable from "../components/RevenueTable";
import RevenueChart from "../components/RevenueChart";
import KpiCard from "../components/KpiCard";
import LoadingSpinner from "../components/LoadingSpinner";
import PageHeader from "../components/PageHeader";
import AnalyticsCard from "../components/AnalyticsCard";

function Dashboard() {

    // Revenue state
    const [revenueData, setRevenueData] = useState([]);

    // KPI state
    const [kpiData, setKpiData] = useState({});

    // Loading state
    const [loading, setLoading] = useState(true);

    // Year filter state
    const [year, setYear] = useState(2018);

    // Runs whenever year changes
    useEffect(() => {

        fetchRevenue();
        fetchKpis();

    }, [year]);

    // Fetch revenue data
    const fetchRevenue = async () => {

        try {

            setLoading(true);

            const response = await API.get(
                `/monthly-revenue?year=${year}`
            );

            setRevenueData(response.data);

            setLoading(false);

        } catch (error) {

            console.error(
                "Error fetching revenue data:",
                error
            );

            setLoading(false);
        }
    };

    // Fetch KPI data
    const fetchKpis = async () => {

        try {

            const response = await API.get(
                "/kpis"
            );

            setKpiData(response.data);

        } catch (error) {

            console.error(
                "Error fetching KPI data:",
                error
            );
        }
    };

    return (

        <Layout>

            {/* Page Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">

                <PageHeader
                    title="CommerceIQ Dashboard"
                    subtitle="E-commerce analytics platform"
                />

                {/* Year Filter */}
                <div className="mt-4 lg:mt-0">

                    <select
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="bg-white border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >

                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>

                    </select>

                </div>

            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">

                <KpiCard
                    title="Total Revenue"
                    value={kpiData.total_revenue}
                />

                <KpiCard
                    title="Total Orders"
                    value={kpiData.total_orders}
                />

                <KpiCard
                    title="Total Customers"
                    value={kpiData.total_customers}
                />

            </div>

            {/* Loading State */}
            {loading ? (

                <LoadingSpinner />

            ) : (

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                    {/* Revenue Chart */}
                    <AnalyticsCard title="Monthly Revenue">

                        <RevenueChart
                            revenueData={revenueData}
                        />

                    </AnalyticsCard>

                    {/* Revenue Table */}
                    <AnalyticsCard title="Revenue Table">

                        <RevenueTable
                            revenueData={revenueData}
                        />

                    </AnalyticsCard>

                </div>

            )}

        </Layout>

    );
}

export default Dashboard;