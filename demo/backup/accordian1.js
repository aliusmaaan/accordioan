import React, { PureComponent } from 'react';
import './accordian.scss';
class Accordian extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            open: !!props.open
        };
    }

    toggleOption = () => {
        const { open } = this.state;
        this.setState({ open: !open });
    }

    render() {
        // console.log(this.props.options);
        const { title, children } = this.props;
        const { open } = this.state;
        return (
            <li className='accordian'>
                <Title open={open} onClick={this.toggleOption}>
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

const Item = ({children}) => {
    return(
        <div className='accordian__view'>
            {children}
        </div>
    )
}

Accordian.Title = Title;
Accordian.View = View;
Accordian.Item = Item;


export default Accordian;