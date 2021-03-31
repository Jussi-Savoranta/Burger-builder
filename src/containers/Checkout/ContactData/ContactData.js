import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault(); // preventing the request and to reload the page
        // alert('You continue!');
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price, // total price is only calculated and stored in BurgerBuilder, we neede to get it from there and pass it to checkout and then here
            // just a reminder that in actual shop you should calculate the price on server
            // so that user can't manipulate the price that gets sent to server
            customer: {
                name: 'Jii',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '00100',
                    country: 'Finland'
                },
                email: 'test@test.com'
            },
            delivery: 'fastest'
        }
        axios.post('/orders.json', order) // base url is created in axios-orders.js -file
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    render () {
        let form = (
            <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your Name"></input>
                    <input className={classes.Input} type="email" name="email" placeholder="Your Email"></input>
                    <input className={classes.Input} type="text" name="street" placeholder="Street"></input>
                    <input className={classes.Input} type="text" name="postal" placeholder="Postal Code"></input>
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter your Contact Information</h4>
                {form}
            </div> 
        );
    }
}

export default ContactData;