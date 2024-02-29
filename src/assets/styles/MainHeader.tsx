import styled from '@emotion/styled'

const HeaderLayout = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    box-shadow: 0px 1px 9px rgba(10, 31, 68, 0.1),
    0px 0px 1px rgba(10, 31, 68, 0.08), 0px 8px 10px rgba(10, 31, 68, 0.1);
    background-color: dimgray;
`

const HeaderNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: dimgray;
    margin: 10px 0;
`;


const Menu = styled.button`
    padding: 1rem;
    justify-content: space-between;
    align-items: center;
    background-color: dimgray;
    '&:hover': {
        color: white;
    },
`;

export default function Header() {
    return(
        <>
            <HeaderLayout>
                <HeaderNav>
                    <Menu>로고</Menu>
                </HeaderNav>
                <HeaderNav>
                    <Menu>메뉴1</Menu>
                    <Menu>매뉴2</Menu>
                    <Menu>메뉴3</Menu>
                </HeaderNav>
            </HeaderLayout>
        </>
    )
}