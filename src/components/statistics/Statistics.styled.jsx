import styled from "@emotion/styled";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
`

export const Title = styled.h2`
    color: grey;
    text-transform: uppercase;
`
export const List = styled.ul`
    list-style: none;
    width: 90%;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

function getRandomHexColor(index){
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

export const Item = styled.li`
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${ props => getRandomHexColor(props.index)};
`
export const Type = styled.span`
    color: white;
    font-size: 20px;
`
export const Data = styled.span`
    color: white;
    font-size: 24px;
`