import { NavLink } from "react-router-dom"
export default function Menu() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark" dir="rtl" data-bs-theme="dark">
            <div className="container-fluid" dir="rtl">
                <NavLink to="/" className="navbar-brand" dir="rtl">פופקורן</NavLink>
                <div className="collapse navbar-collapse" dir="rtl">
                    <ul className="navbar-nav  mb-2 mb-lg-0" dir="rtl">
                        <li className="nav-item" dir="rtl">
                            <NavLink className="nav-link" to="/genres" dir="rtl">
                                ז'אנרים
                            </NavLink>
                        </li>
                        <li className="nav-item" dir="rtl">
                            <NavLink className="nav-link" to="/movies/filter" dir="rtl">
                                חיפוש סרטים
                            </NavLink>
                        </li>
        
                        <li className="nav-item" dir="rtl">
                            <NavLink className="nav-link" to="/actors" dir="rtl">
                                שחקנים
                            </NavLink>
                        </li>
                        <li className="nav-item" dir="rtl">
                            <NavLink className="nav-link" to="/theaters" dir="rtl">
                                בתי קולנוע
                            </NavLink>
                        </li>
                        <li className="nav-item" dir="rtl">
                            <NavLink className="nav-link" to="/movies/create" dir="rtl">
                                צור סרט
                            </NavLink>
                        </li>

                    </ul>
                </div>

            </div>

        </nav>
    )
}
