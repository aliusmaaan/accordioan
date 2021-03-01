import React, { PureComponent } from 'react';
import './accordian.scss';
class Accordion extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            open: !!props.open
        };
    }

    static getDerivedStateFromProps({ open: propOpen, controlled }, { open: stateOpen },) {
        if (controlled && propOpen !== stateOpen) {
            return {
                open: propOpen
            }
        }
        return null
    }

    toggleOption = () => {
        const { open } = this.state;
        this.setState({ open: !open });
    }

    handleClick = () => {
        const { id, open, title, controlled, clickHandler } = this.props;
        if (controlled) {
            clickHandler({ id, title, open });
        } else {
            this.toggleOption();
        }
    }

    render() {
        const { open } = this.state;
        const { title, children } = this.props;

        return (
            <li className='accordian'>
                <Title open={open} onClick={this.handleClick}>
                    {title}
                    <span className={`accordian-arrow ${open ? 'accordian-arrowDown' : 'accordian-arrowUp'}`}>˅</span>
                </Title>
                {
                    open ? children : ''
                }
            </li>
        )
    }
}


const Title = ({ children, open, onClick }) => {
    return (
        <div className={`accordian__title ${open ? 'accordian-open' : ''}`} onClick={onClick}>
            {children}
        </div>
    )
}

const View = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
}

const Item = ({ children }) => {
    return (
        <div className='accordian__view'>
            {children}
        </div>
    )
}

Accordion.Title = Title;
Accordion.View = View;
Accordion.Item = Item;


export default Accordion;