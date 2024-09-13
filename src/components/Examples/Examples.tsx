import TabButton from "../TabButton/TabButton";
import {EXAMPLES} from "../../data";
import React, {useState} from "react";
import Section from "../Section/Section";
import Tabs from "../Tabs/Tabs";

enum EKEnum {
    COMPONENT = 'components',
    JSX = 'jsx',
    PROPS = 'props',
    STATE = 'state',
}


const Examples = () => {
    //* What begins with 'use' on React is HOOK
    //! 1.Only call Hooks inside of a Component Function
    //! 2.Only call Hooks on the top level
    //* useState return an array with 2 elements, first element is the current data snapshot, second element will be a function (State updating function) that will update the state

    const [selectedTopic, setSelectedTopic] = useState<EKEnum | undefined>();
    let tabContent = ''

    function handleSelect(selectedButton: EKEnum): void {
        setSelectedTopic(selectedButton)
        console.log(selectedTopic)
    }

    return (

        <Section title="Examples" id='examples'>
            <Tabs
                buttonsContainer='menu'
                buttons={
                    <>
                        <TabButton
                            isSelected={selectedTopic === EKEnum.COMPONENT}
                            onClick={() => handleSelect(EKEnum.COMPONENT)}>
                            Component
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === EKEnum.JSX}
                            onClick={() => handleSelect(EKEnum.JSX)}>
                            JSX
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === EKEnum.PROPS}
                            onClick={() => handleSelect(EKEnum.PROPS)}>
                            Props
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === EKEnum.STATE}
                            onClick={() => handleSelect(EKEnum.STATE)}>
                            State
                        </TabButton>
                    </>
                }>
                {tabContent}
            </Tabs>

            {!selectedTopic ? <p>Please select a topic.</p> : (
                <div id="tab-content">
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                            <code>
                                {EXAMPLES[selectedTopic].code}
                            </code>
                        </pre>
                </div>
            )}
        </Section>
    )
}

export default Examples