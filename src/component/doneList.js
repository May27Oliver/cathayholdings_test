import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './card'

const Done = styled.div`
    width:100%;
    postion:relative;
`
const DonListBox = styled.div`
    width:100%;
`
const DoneTitle = styled.div`
    border-bottom:1px solid #ccc;
    box-sizing:border-box;
    width:100%;
    line-height:50px;
    background:#F8F8F8;
    padding:0 50px;
    position:relative;
    &:before{
        content:'';
        position:absolute;
        top:16px;
        left:35px;
        width:5px;
        height:20px;
        background:#009F49;
    }
`

class doneList extends Component {
    render() {
        const { job } = this.props;
        const finished = true;
        return (
            <Done>
                <DoneTitle>已完成</DoneTitle>
                <DonListBox>
                    {job.map(item=>(<Card info={item} finish={finished}/>))}
                </DonListBox>
            </Done>
        );
    }
}

export default doneList;