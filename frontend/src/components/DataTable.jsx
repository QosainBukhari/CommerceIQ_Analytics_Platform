function DataTable({ columns, data }) {

    return (

        <div className="overflow-x-auto">

            <table className="min-w-full">

                <thead>

                    <tr className="border-b">

                        {columns.map((column, index) => (

                            <th
                                key={index}
                                className="text-left py-3 px-4 font-semibold text-gray-700"
                            >

                                {column.header}

                            </th>

                        ))}

                    </tr>

                </thead>

                <tbody>

                    {data.map((row, rowIndex) => (

                        <tr
                            key={rowIndex}
                            className="border-b hover:bg-gray-50"
                        >

                            {columns.map((column, colIndex) => (

                                <td
                                    key={colIndex}
                                    className="py-3 px-4"
                                >

                                    {row[column.accessor]}

                                </td>

                            ))}

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );
}

export default DataTable;