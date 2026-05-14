function KpiCard({ title, value }) {

    // Format values
    const formatValue = () => {

        if (value === undefined || value === null) {
            return "—";
        }

        // Revenue formatting
        if (title.toLowerCase().includes("revenue")) {

            return Number(value).toLocaleString(
                "en-US",
                {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0
                }
            );
        }

        // Normal number formatting
        return Number(value).toLocaleString();
    };

    return (

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 border border-gray-100">

            {/* Title */}
            <p className="text-gray-500 text-sm font-medium mb-2 uppercase tracking-wide">
                {title}
            </p>

            {/* Value */}
            <h2 className="text-3xl font-bold text-gray-800">
                {formatValue()}
            </h2>

        </div>

    );
}

export default KpiCard;