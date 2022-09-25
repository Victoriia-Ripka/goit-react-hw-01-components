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

const colors = {
    1: "#047E89",
    2: "#C69FA8",
    3: "#DCE7EF",
    4: "#ECB8AD",
    5: "#E9CBBF",
}


export const Item = styled.li`
    width: 20%;
    display: flex;
    flex-direction: column;
    background-color: ${colors => {
        return random.choice(colors)
    }};
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