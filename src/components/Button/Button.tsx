export default function Button(props: buttonProps) {
    return <button className="btn btn-outline-primary" dir="rtl">{props.children}</button>

}

interface buttonProps {
    children: React.ReactNode
}