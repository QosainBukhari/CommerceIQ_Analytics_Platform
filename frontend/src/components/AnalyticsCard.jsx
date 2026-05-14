function AnalyticsCard({ title, children }) {

    return (

        <div className="bg-white rounded-2xl shadow-md p-6">

            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                {title}
            </h2>

            {children}

        </div>

    );
}

export default AnalyticsCard;