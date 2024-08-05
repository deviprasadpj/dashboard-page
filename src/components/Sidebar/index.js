import './index.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <ul className="sidebar-list-container">
                    <li className="sidebar-list-item">Dashboard</li>
                    <li className="sidebar-list-item">Inventory</li>
                    <li className="sidebar-list-item">Order</li>
                    <li className="sidebar-list-item">Returns</li>
                    <li className="sidebar-list-item">Customers</li>
                    <li className="sidebar-list-item">Shipping</li>
                    <li className="sidebar-list-item">Channel</li>
                    <li className="sidebar-list-item">integrations</li>
                    <li className="sidebar-list-item">Calculators</li>
                    <li className="sidebar-list-item">Reports</li>
                    <li className="sidebar-list-item">Account</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar