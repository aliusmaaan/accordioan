import React, { PureComponent } from 'react';
import './accordian.scss';
export default class Accordian extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            options: props.options
        };
    }

    toggleOption = (selectedOption) =>{
        const {options} = this.state;
        const {multiple = false} = this.props;
        console.log('old',options);
        const newOptions = [...options.map(option =>(
            {
                ...option,
                open:option.value === selectedOption.value ? !option.open : (multiple ? !!option.open: false)
            }            )
                        )];
                        console.log('new',newOptions);
        this.setState({
            options: newOptions
        })

    }

    getOption = () =>{
        const { options =[] } = this.state;
        return (
            options.map(option => (
                <li  key={option.label} className='accordian'>
                    <div className={`accordian__heading ${option.open? 'accordian-list__accordian-heading-accordian-opened':''}`} onClick={()=>{this.toggleOption(option)}}>
                        {option.label}

                    </div>
                    {option.open ? (<div>{option.child}</div>):''}
                </li>

            ))
        )

    }
    render(){
        // console.log(this.props.options);
        return (
            <ul className='accordian-list'>
                {/* Here */}
                {this.getOption()}
            </ul>
        )
    }
}