import {CORE_CONCEPTS} from "../../data";
import CoreConcept from "./CoreConcept";
import React from "react";

const CCListComponent = () => {
    return (<section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
            {CORE_CONCEPTS.map((CORE_CONCEPT) => (
                <CoreConcept
                    key={CORE_CONCEPT.title}
                    title={CORE_CONCEPT.title}  //* These are called props
                    description={CORE_CONCEPT.description}
                    image={CORE_CONCEPT.image}
                />
            ))}

            {/* <CoreConcept*/}
            {/*    title={CORE_CONCEPTS[0].title}  //* These are called props*/}
            {/*    description={CORE_CONCEPTS[0].description}*/}
            {/*    image={CORE_CONCEPTS[0].image}*/}
            {/*/>*/}
            {/*<CoreConcept*/}
            {/*    title={CORE_CONCEPTS[1].title}  //* These are called props*/}
            {/*    description={CORE_CONCEPTS[1].description}*/}
            {/*    image={CORE_CONCEPTS[1].image}*/}
            {/*/>*/}
            {/*<CoreConcept*/}
            {/*    {...CORE_CONCEPTS[2]} //* If properties of CORE_CONCEPTS are the same as the props of the component, then we can use spread operator ...*/}
            {/*/>*/}
            {/*<CoreConcept*/}
            {/*    {...CORE_CONCEPTS[3]}*/}
            {/*/>*/}
        </ul>
    </section>
    )
}

export default CCListComponent