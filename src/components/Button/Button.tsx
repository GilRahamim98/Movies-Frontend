export default function Button(props: buttonProps) {
    return <button className={props.className} disabled={props.disabled} dir="rtl" onClick={props.onClick} type={props.type}>{props.children}</button>

}

interface buttonProps {
    children: React.ReactNode;
    onClick?():void;
    type:"button"|"submit";
    disabled:boolean;
    className:string;
}

Button.defaultProps={
    type:"button",
    disabled:false,
    className:"btn btn-outline-primary"
}