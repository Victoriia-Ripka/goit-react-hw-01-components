import styled from "@emotion/styled";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h2`
    color: grey;
    text-transform: uppercase;
`
export const List = styled.ul`
    list-style: none;
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center
`

/* const colors = {
    0: "#047E89",
    1: "#C69FA8",
    2: "#DCE7EF",
    3: "#ECB8AD",
    4: "#E9CBBF",
} 
background-color: ${props => {
    return colors.getRandomInt(5)
}}; */

export const Item = styled.li`
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Type = styled.span`
    color: white;
    font-size: 20px;
`
export const Data = styled.span`
    color: white;
    font-size: 24px;
`