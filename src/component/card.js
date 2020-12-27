import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

const CardBox = styled.div`
    width:100%;
    height:150px;
    display:flex;
    border-bottom:1px solid #ccc;
`
const LogoBox = styled.div`
    flex:0 0 20%;
    background:url(${props=>props.address}) no-repeat ;
    background-position:center;
    background-size:80%;
`

const ContentBox = styled.div`
    padding:20px;
    flex:1;
`
const ContentHeader = styled.div`
    display:flex;
    font-weight:500;
    justify-content:space-between;
    margin-bottom:10px;
`
const ContentTitle = styled.h3`

`

const ContentNext = styled.div`
    flex:0 0 60px;
    display:flex;
    flex-direction:column;
    justify-content:center;
`

const StatusMSG = styled.span`
    color:${props=>props.deal?'#777':'#009F49'};
`
const Shipment = styled.span`

`

class card extends Component {
    render() {
        const {info,finish} = this.props;
        return (
            <CardBox>
                <LogoBox address={info.logo}></LogoBox>
                <ContentBox>
                    <ContentHeader>
                        <StatusMSG deal={finish}>{info.status.type}</StatusMSG>
                        <Shipment>{finish?'':"預計出貨： " + info.date}</Shipment>
                    </ContentHeader>
                    <ContentTitle>{info.name}</ContentTitle>
                </ContentBox>
                <ContentNext>
                    <FontAwesomeIcon icon={fas.faAngleRight}  size="lg" className="font-awesome-icon"/>
                </ContentNext>
            </CardBox>
        );
    }
}

export default card;