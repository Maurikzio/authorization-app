
import styled from 'styled-components';
import 'normalize.css';
import '../../assets/fonts/fonts.css';
import { Input } from '../signin/sign-in-styles';

export const Names = styled.div`
    display: flex;
    justify-content: space-between;
    input${Input}{
        min-width: 0px;
    } 
`;
export const Firstname = styled(Input)`
    margin-right: 5px;
`;
export const Lastname = styled(Input)`
    margin-left: 5px;
`;
export const Reminder = styled.div`
    display: flex;
    font-size: 12px;
    margin: 8px 0px 20px 0px;
`;

