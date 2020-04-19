import styled from 'styled-components';

import 'normalize.css';
import '../../assets/fonts/fonts.css';

export const Wrapper = styled.div`
    background: rgb(18, 18, 18);
    width: 280px;
    margin: 10px auto;
    padding: 40px 60px;
    color: white;
    font-family: 'Roboto', sans-serif;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
export const Header = styled.header`
    text-align: center;
`;

export const Section = styled.section`
    background: rgb(255, 126, 175);
    padding: 5px 7px;
    width: 20px;
    border-radius: 50%;
    margin: 0 auto;
`;
export const Logo = styled.img`
    width: 20px;
`;
export const Input = styled.input`
    font-family: 'Roboto';
    background: transparent;
    color: white;
    border: 1px solid rgb(143, 143, 143);
    border-radius: 3px;
    margin: 8px 0;
    font-size: 12px;
    padding: 15px;
    font-weight: 800;
    &::placeholder{
        font-size: 15px;
        font-family: 'Roboto', sans-serif;
    }
    &:focus{
        outline: none !important;
        border-color: white;
    }
`;
export const Reminder = styled.div`
    font-size: 12px;
    margin: 8px 0px 20px 0px;
`;
export const Checkbox = styled.input`
    margin-right: 15px;
`;
export const Label = styled.label`
    
`;
export const Button = styled.button`
    background: rgb(144, 202, 249);
    color: black;
    font-size: 10px;
    padding: 8px;
    border: 1px solid rgb(18, 18, 18);
    border-radius: 3px;
`;
export const List = styled.ul`
    list-style: none;
    display: flex;
    font-size: 12px;
    padding: 0px;
    margin-bottom: 40px;
    justify-content: space-between;
`;
export const Item = styled.li`
    color: rgb(144, 202, 249);
    & a{
        color: rgb(144, 202, 249);
        text-decoration: none;
    }
`;
export const Pharagraph = styled.p`
    text-align: center;
    font-size: 12px;
`;