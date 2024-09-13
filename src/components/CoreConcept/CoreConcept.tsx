import './CoreConcept.css'

type Props = {
    title:string,
    description:string,
    image:string,
}

export default function CoreConcept({title, description, image}:Props) {
    return <li>
        <img src={image} alt=""/>
        <h3>{title}</h3>
        <p>{description}</p>
    </li>
}