import styled from "@emotion/styled";

export const ListOfFiends = styled.ul`
    list-style: none;
    width: 45%;
`

export const ItemofFriends = styled.li`
    display: flex;
    align-items: center;
    justify-content: left;
    border: 1px solid #f0f0f0;
    border-radius: 5px;
    box-shadow: 0px 0px 21px -7px rgba(66, 68, 90, 1);
    margin: 10px;
    padding: 10px;
`

export const Online = styled.span`
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: ${props => {
        return props.selected ? 'green' : 'red';
    }};
`
export const Avatar = styled.img`
    border-radius: 5px;
    border: 1px solid #f0f0f0;
    margin: 10px;
`
export const Name = styled.p`
    font-weight: 700;
    font-size: 20px;
`