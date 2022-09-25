import styled from '@emotion/styled'

export const Card = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: medium solid #f0f0f0;
    /* padding: 30px; */
`

export const MainCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Avatar = styled.img`
    border-radius: 50%;
    width: 100px;
    margin: 15px;
`

export const Name = styled.p`
    font-weight: bold;
    font-size: 24px;
    padding: 0;
    margin: 0 0 20px 0;
`

export const Info = styled.p`
    color: grey;
    font-size: 16px;
    padding: 0;
    margin: 0 0 10px 0;
`

export const List = styled.ul`
    background-color: gray;
    width: 100%;
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
`

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 33%;
    border: 1px solid #f0f0f0;
    height: 83px;
`
export const NumberText = styled.span`
    color: white;
    font-size: 16px;
`

export const NumberInfo = styled.span`
    font-weight: bold;
    font-size: 16px;
`