export default function Tabs({children,buttons, buttonsContainer}:any) {
    return <>
            <menu>{buttons}</menu>
            {children}
        </>

}