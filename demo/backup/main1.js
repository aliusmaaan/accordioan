import ReactDom from "react-dom";
import Accordian from "../../index";
import React from "react";

import './main.scss';
export class Component extends React.PureComponent {
    state = { menuOpen: false }


    toggleMenu = () => {
        const { menuOpen } = this.state;
        this.setState({ menuOpen: !menuOpen });
    }
    render() {
        const { menuOpen } = this.state;
        return (
            <div>
                <div className='header'>
                    Breadcrumbs comes here
                </div>
                <div className='body'>
                    <div className='menu'>
                        {!menuOpen ? (<div className='menu__hamburger pntr' onClick={this.toggleMenu}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>) :
                            (<div className='navigations'>
                                <div className='al-end p5 pntr' onClick={this.toggleMenu}>&#10005;</div>
                                <Accordian title='Requirment' open={true}>

                                    <Accordian.View>
                                        <a className='menu__links'>Requirment Detail</a>
                                        <a className='menu__links'>Requirment Creation & Closure</a>
                                        <a className='menu__links'>Requirment Aging</a>
                                        <a className='menu__links'>Requirment Funnel</a>
                                        <a className='menu__links'>Requirment Tat</a>
                                        <a className='menu__links'>Requirment Tat - stage level TAT</a>
                                    </Accordian.View>
                                   
                                </Accordian>
                                <Accordian title='Recruiter' open={true}>
                                    <Accordian.View>
                                        <a className='menu__links'>Recruiter Detail</a>
                                        <a className='menu__links'>Recruiter Creation & Closure</a>
                                        <a className='menu__links'>Recruiter Aging</a>
                                        <a className='menu__links'>Recruiter Funnel</a>
                                        <a className='menu__links'>Recruiter Tat</a>
                                        <a className='menu__links'>Recruiter Tat - stage level TAT</a>
                                    </Accordian.View>
                                </Accordian>
                                <Accordian title='default' open={true}>
                                    <Accordian.Item>
                                        Item
                                    </Accordian.Item>
                                </Accordian>
                            </div>)}
                    </div>
                    <div className='main'></div>
                </div>
            </div>
        )
    }
}
// export default Component
ReactDom.render(<Component />, document.getElementById('root'));