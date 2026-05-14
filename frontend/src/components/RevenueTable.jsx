function RevenueTable({ revenueData }) {

    return (

        <div className="overflow-x-auto">

            <table className="min-w-full border-collapse">

                {/* Table Head */}
                <thead>

                    <tr className="bg-gray-100 border-b">

                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wide">
                            Month
                        </th>

                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wide">
                            Revenue
                        </th>

                    </tr>

                </thead>

                {/* Table Body */}
                <tbody>

                    {revenueData.length > 0 ? (

                        revenueData.map((item, index) => (

                            <tr
                                key={index}
                                className="border-b hover:bg-gray-50 transition duration-200"
                            >

                                {/* Month */}
                                <td className="px-6 py-4 text-gray-700 font-medium">

                                    {item.year_month}

                                </td>

                                {/* Revenue */}
                                <td className="px-6 py-4 text-blue-600 font-semibold">

                                    $
                                    {Number(
                                        item.total_revenue
                                    ).toLocaleString()}

                                </td>

                            </tr>

                        ))

                    ) : (

                        <tr>

                            <td
                                colSpan="2"
                                className="text-center py-8 text-gray-500"
                            >

                                No revenue data available

                            </td>

                        </tr>

                    )}

                </tbody>

            </table>

        </div>

    );
}

export default RevenueTable;