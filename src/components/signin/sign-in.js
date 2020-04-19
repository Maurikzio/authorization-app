import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';

import handlerInputsUpdates  from '../../validations'
import {
    Wrapper,
    Header,
    Section,
    Logo,
    Form, 
    Input,
    Reminder,
    Checkbox,
    Label, 
    Button, 
    List, 
    Item,
    Pharagraph
} from './sign-in-styles'


function SignIn(){
    return (
        <Wrapper>
            <Header>
                <Section>
                    <Logo src={require('../../assets/logo.png')}/>
                </Section>
                <p>Sign in</p>
            </Header>
            <Form>
                <Input type='text' name='email' placeholder='Email Address *' onChange={handlerInputsUpdates}/>
                <Input type='password' name='password' placeholder='Password *' onChange={handlerInputsUpdates}/>
                <Reminder>
                    <Checkbox type='checkbox'/>
                    <Label htmlFor='signin-remember-me'>Remember me</Label>
                </Reminder>

                <Button onClick={e => e.preventDefault()}>SIGN IN</Button>
                <List>
                    <Item>
                        <a href='#'>Forgot Pasword?</a>
                    </Item>
                    <Item>
                        <span>Don't have an account? </span>
                        <Link to="/authorization-app/sign-up">Sign up</Link>
                    </Item>
                </List>
            </Form>
            <Pharagraph>Copyright &copy; Maurikzio.io 2020</Pharagraph>
        </Wrapper>
    )
}

export default SignIn;