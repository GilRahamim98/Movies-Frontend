import { ReactElement } from "react";
import Loader from "../loader/Loader";

export default function GenericeList(props: genericListProps) {
    if (!props.list) {
        return props.loadingUI ? props.loadingUI : <Loader />
    } else if (props.list.length === 0) {
        return props.emptyListUI ? props.emptyListUI : <div dir="rtl">אין סרטים להציג כעת.</div>
    } else {
        return props.children

    }
}

interface genericListProps {
    list: any;
    loadingUI?: ReactElement;
    emptyListUI?: ReactElement;
    children: ReactElement;
}