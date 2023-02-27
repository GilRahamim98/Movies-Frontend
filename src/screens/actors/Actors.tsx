import { Link } from "react-router-dom";

export default function Actors() {
    return (
        <div dir="rtl">
            <h2 dir="rtl">שחקנים</h2>
            <Link className="btn btn-dark" to='/actors/create' dir="rtl">יצירת שחקן</Link>

        </div>
    )

}