export default function Footer(){
    return(
        <footer className="bd-footer py-5 mt-5 bg-light">
            <div className="container" dir="rtl">
                <span>פופקורן &copy; {new Date().getFullYear().toString()}</span>{" "}
                <span>נוצר על ידי
                {" "}<a href="https://gil-rahamim.netlify.app/" target="_blank" rel="noreferrer">גיל רחמים</a>
                </span>

            </div>
        </footer>
    )
}