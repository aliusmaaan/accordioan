import React from 'react'
import Accordion from './accordion'

export const AccordionGroup = (props) => {
    const { data, controlled, clickHandler = () => { } } = props;
    return (
        data.length ?
            data.map(({ title, view, id, open = false }) => (
                <Accordion title={title} open={open} key={id} id={id} controlled={!!controlled} clickHandler={clickHandler} >
                    <Accordion.Item>
                        {view}
                    </Accordion.Item>
                </Accordion>
            ))
            : ''

    )
}

export default AccordionGroup