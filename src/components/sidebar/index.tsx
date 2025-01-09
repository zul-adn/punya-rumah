import React from 'react'

type Props = {}

function Sidebar({ }: Props) {
    return (
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
    )
}

export default Sidebar