import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";

function RevenueChart({ revenueData }) {

    return (

        <div className="w-full h-[400px]">

            <ResponsiveContainer width="100%" height="100%">

                <LineChart data={revenueData}>

                    {/* Background grid */}
                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#e5e7eb"
                    />

                    {/* X Axis */}
                    <XAxis
                        dataKey="year_month"
                        tick={{ fill: "#6b7280", fontSize: 12 }}
                    />

                    {/* Y Axis */}
                    <YAxis
                        tick={{ fill: "#6b7280", fontSize: 12 }}
                    />

                    {/* Tooltip */}
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#ffffff",
                            borderRadius: "12px",
                            border: "1px solid #e5e7eb"
                        }}
                        formatter={(value) =>
                            `$${Number(value).toLocaleString()}`
                        }
                    />

                    {/* Revenue Line */}
                    <Line
                        type="monotone"
                        dataKey="total_revenue"
                        stroke="#2563eb"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                        activeDot={{ r: 7 }}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );
}

export default RevenueChart;