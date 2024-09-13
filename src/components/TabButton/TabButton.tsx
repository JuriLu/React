import * as React from "react";
import './TabButton.css'

type Props = {
    children: React.ReactNode;
    onSelect: () => void;
    isSelected: boolean;
}

const TabButton = ({children, onSelect, isSelected}: Props) => {      //* Alternative (props)  props.children , props.onSelect
    return (
        <li>
            <button
                className={isSelected ? 'active' : undefined}
                onClick={onSelect}>
                {children}
            </button>
        </li>
    )
}

export default TabButton