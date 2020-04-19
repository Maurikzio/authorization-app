import React from 'react'
import { Link } from 'react-router-dom';

import handlerInputsUpdates  from '../../validations'
import {
    Wrapper,
    Header,
    Section,
    Logo,
    Form, 
    Input,
    Checkbox,
    Label, 
    Button, 
    List, 
    Item,
    Pharagraph } from '../signin/sign-in-styles';
import { Names, Firstname, Lastname, Reminder, } from './sign-up-styles'
    
function SignUp(){
    return (
        <Wrapper>
            <Header>
                <Section>
                    <Logo src={require('../../assets/logo.png')}/>
                </Section>
                <p>Sign Up</p>
            </Header>
            <Form>
                <Names>
                    <Firstname type='text' name='firstname' placeholder='First Name *'  onChange={handlerInputsUpdates}/>
                    <Lastname type='text' name='lastname' placeholder='Last Name *' onChange={handlerInputsUpdates}/>
                </Names>
                <Input type='email' name='email' onChange={handlerInputsUpdates} placeholder='Email Address *'/>
                <Input type='password' name='password' onChange={handlerInputsUpdates} placeholder='Password *'/>

                <Reminder>
                    <Checkbox type='checkbox'/>
                    <Label htmlFor='signin-remember-me'>I want to receive inspiration, marketing promotions and updates via email</Label>
                </Reminder>

                <Button onClick={e => {e.preventDefault();}} > SIGN UP</Button>
                <List>
                    <Item>
                        <span>Already have an account? </span>
                        <Link to="/authorization-app/">Sign in</Link>
                    </Item>
                </List>
            </Form>
            <Pharagraph>Copyright &copy; Maurikzio.io 2020</Pharagraph>
        </Wrapper>
    )
}

export default SignUp