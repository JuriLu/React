export default function Tabs({children,buttons, buttonsContainer = 'menu'}:any) {
    const ButtonsContainer = buttonsContainer
    return <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>

}