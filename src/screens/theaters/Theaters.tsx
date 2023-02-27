import { Link } from "react-router-dom";

export default function Theaters() {
    return (
        <div dir="rtl">
            <h2 dir="rtl">בתי קולנוע</h2>
            <Link className="btn btn-dark" to='/theaters/create' dir="rtl">יצירת בית קולנוע</Link>

        </div>
    )

}