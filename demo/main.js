import ReactDom from "react-dom";
import { Accordian, AccordianGroup } from "../index";
// import Accordian from "../index";
import React from "react";

import './main.scss';
import { data } from "./data";
export class Component extends React.PureComponent {
    state = { menuOpen: false, accOpen: true, accrdnList: data }


    toggleMenu = () => {
        const { menuOpen } = this.state;
        this.setState({ menuOpen: !menuOpen });
    }
    toggleAccordians = () => {
        const { accOpen } = this.state;
        // console.log('!accOpen',!accOpen);
        this.setState({ accOpen: !accOpen });
    }

    handleMultipleAccrdns = ({ id, open }) => {
        // console.log('id, open', id, open);
        const { accrdnList } = this.state;
        const updatedList = accrdnList.map(accr => (
            {
                ...accr,
                open: accr.id === id ? !open : accr.open
            }
        ))
        this.setState({ accrdnList: updatedList })
    }

    resetMultipleAccrdns = ({ key }) => {
        this.setState({ accrdnList: data })
    }
    render() {
        const { menuOpen, accOpen, accrdnList } = this.state;

        return (
            <div>
                <div className='header'>
                    Breadcrumbs comes here <span onClick={this.toggleAccordians} className='pntr'>&times;</span>
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
                                <h3>Controlled</h3>
                                <Accordian title='Requirment' open={accOpen} controlled clickHandler={this.toggleAccordians}>
                                    <Accordian.View>
                                        <a className='menu__links'>Requirment Detail</a>
                                        <a className='menu__links'>Requirment Creation & Closure</a>
                                        <a className='menu__links'>Requirment Aging</a>
                                        <a className='menu__links'>Requirment Funnel</a>
                                        <a className='menu__links'>Requirment Tat</a>
                                        <a className='menu__links'>Requirment Tat - stage level TAT</a>
                                    </Accordian.View>

                                </Accordian>
                                <h3></h3>
                                <Accordian title='Recruiter' open={accOpen}>
                                    <Accordian.View>
                                        <a className='menu__links'>Recruiter Detail</a>
                                        <a className='menu__links'>Recruiter Creation & Closure</a>
                                        <a className='menu__links'>Recruiter Aging</a>
                                        <a className='menu__links'>Recruiter Funnel</a>
                                        <a className='menu__links'>Recruiter Tat</a>
                                        <a className='menu__links'>Recruiter Tat - stage level TAT</a>
                                    </Accordian.View>
                                </Accordian>
                                <Accordian title='default' open={accOpen}>
                                    <Accordian.Item>
                                        Item
                                    </Accordian.Item>
                                </Accordian>

                                <h3>Accordian Group</h3>
                                <AccordianGroup data={accrdnList} key='1' />
                                <h3>Accordian Group controlled</h3>
                                <AccordianGroup key='2' data={accrdnList} clickHandler={this.handleMultipleAccrdns} controlled={true} />

                                <h3 onClick={this.resetMultipleAccrdns}>Reset group</h3>
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