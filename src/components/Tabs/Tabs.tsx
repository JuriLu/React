export default function Tabs({children,buttons, buttonsContainer}:any) {
    const ButtonsConstainer = buttonsContainer
    return <>
            <ButtonsConstainer>{buttons}</ButtonsConstainer>
            {children}
        </>

}