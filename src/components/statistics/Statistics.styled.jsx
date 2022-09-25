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
    width: 90%;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Item = styled.li`
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${key => {
        switch(key){
            case 'id-1':
                return '#047E89';
            case 'id-2':
                return '#C69FA8';
            case 'id-3':
                return '#DCE7EF';
            case 'id-4':
                return '#ECB8AD';
            case 'id-5':
                return '#E9CBBF';
            default:
                return 'black';
        }
    }};
`
export const Type = styled.span`
    color: white;
    font-size: 20px;
`
export const Data = styled.span`
    color: white;
    font-size: 24px;
`