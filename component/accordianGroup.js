import React from 'react'
import Accordian from './accordian'

export const AccordianGroup = (props) => {
    const { data, controlled, clickHandler = () => { } } = props;
    return (
        data.length ?
            data.map(({ title, view, id, open = false }) => (
                <Accordian title={title} open={open} key={id} id={id} controlled={!!controlled} clickHandler={clickHandler} >
                    <Accordian.Item>
                        {view}
                    </Accordian.Item>
                </Accordian>
            ))
            : ''

    )
}

export default AccordianGroup