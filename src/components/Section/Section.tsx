interface Props {
    title: string,
    children: any,
}

export default function Section({title, children,...props}: any) { //* Proxy props, Forwared props => ...props
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}