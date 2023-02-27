import { Link } from "react-router-dom";

export default function Genres() {
    return (
        <div dir="rtl">
            <h2 dir="rtl">ז'אנרים</h2>
            <Link className="btn btn-dark" to='/genres/create' dir="rtl">יצירת ז'אנר</Link>

        </div>
    )

}