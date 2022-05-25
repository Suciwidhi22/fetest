import React, { Component } from 'react'
import Header from '../Parts/Header'
import Input from '../elements/Form/InputForm/index'
import Button from '../elements/Button'

export default class LoginPage extends Component {
  render() {
    return (
      <>
        <Header isCentered />
        <section className='container '>
          <form className='col-4 mx-auto pt-5 border border-white'>
                <h2 className='text-center font-semibold mb-5'>Login Page</h2>
                <Input placeholder='Username' className="rounded-pill"></Input>
                <br />
                <Input placeholder='Password'></Input>
                < br/>
                <Button className='btn btn-block rounded-pill px-5' hasShadow isPrimary type='link' href='/loginpage'>
                            Login
                        </Button>
          </form>

        </section>
      </>
    )
  }
}



