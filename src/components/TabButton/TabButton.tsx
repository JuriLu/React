import * as React from "react";
import './TabButton.css'

type Props = {
    children: React.ReactNode;
    isSelected: boolean;
}

const TabButton = ({children, isSelected, ...props}: any) => {      //* Alternative (props)  props.children , props.onSelect
    return (
        <li>
            <button
                className={isSelected ? 'active' : undefined}
                {...props}>
                {children}
            </button>
        </li>
    )
}

export default TabButton