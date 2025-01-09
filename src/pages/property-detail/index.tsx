import React from 'react';

const InvestmentDashboard = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md">
                <div className="p-6">
                    <h1 className="text-lg font-bold">INVESTMENT</h1>
                </div>
                <nav className="p-4 space-y-4">
                    <div className="text-xs font-semibold text-gray-400">MENU SUBTITLE</div>
                    <ul className="space-y-2">
                        <li className="text-gray-600 hover:text-blue-500 cursor-pointer">Menu item</li>
                        <li className="text-gray-600 hover:text-blue-500 cursor-pointer">Marketplace</li>
                        <li className="text-gray-600 hover:text-blue-500 cursor-pointer">Menu item</li>
                        <li className="text-gray-600 hover:text-blue-500 cursor-pointer">Menu item</li>
                        <li className="text-gray-600 hover:text-blue-500 cursor-pointer">Menu item</li>
                    </ul>
                    <div className="mt-8 text-xs font-semibold text-gray-400">MENU SUBTITLE</div>
                    <ul className="space-y-2">
                        <li className="text-gray-600 hover:text-blue-500 cursor-pointer">Menu item</li>
                        <li className="text-gray-600 hover:text-blue-500 cursor-pointer">Menu item</li>
                        <li className="text-gray-600 hover:text-blue-500 cursor-pointer">Menu item</li>
                    </ul>
                </nav>
                <div className="mt-auto p-4 border-t">
                    <div className="flex items-center justify-between">
                        <div className="text-gray-600">User email</div>
                        <button className="text-blue-500">Logout</button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                <header className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Headline</h1>
                    <div className="flex items-center space-x-4">
                        <button className="bg-gray-200 p-2 rounded-md">List</button>
                        <button className="bg-gray-200 p-2 rounded-md">Map</button>
                        <button className="bg-gray-200 p-2 rounded-md">Wallet</button>
                    </div>
                </header>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-6">
                    <select className="border p-2 rounded-md bg-white">
                        <option>Filter name</option>
                    </select>
                    <select className="border p-2 rounded-md bg-white">
                        <option>Filter name</option>
                    </select>
                    <select className="border p-2 rounded-md bg-white">
                        <option>Filter name</option>
                    </select>
                    <button className="bg-gray-200 p-2 rounded-md">Clean filters</button>
                </div>

                {/* Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Array(8).fill(0).map((_, index) => (
                        <div key={index} className="bg-white p-4 shadow-md rounded-lg">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-gray-400">Status</span>
                                <button className="text-gray-400">...</button>
                            </div>
                            <div className="bg-gray-100 h-32 rounded-md mb-4"></div>
                            <h2 className="text-lg font-bold">Token Name</h2>
                            <p className="text-sm text-gray-500">Location</p>
                            <p className="text-lg font-bold mt-2">Property price: $0.00</p>
                            <div className="flex justify-between text-sm text-gray-500 mt-4">
                                <span>Token price: $0.00</span>
                                <span>Projected IRR: 0.00%</span>
                                <span>Projected APR: 0.00%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default InvestmentDashboard;
