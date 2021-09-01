import React, {Component} from 'react';

class PersonCard extends Component{

    constructor(props){
        super(props)
        this.state = {
            ageNum: this.props.age
        };
    }

    clickHandler = () => {
        let age = this.state.ageNum
        this.setState({
            "ageNum": ++age,
        });
        console.log(this.state.age)
    }

    render(){
        const {firstName, lastName, hairColor} = this.props;
        return(
            <div class="center">
                <h1 class="center">{lastName}, {firstName}</h1>
                <p class="left">Age: {this.state.ageNum}</p>
                <p class="left">Hair Color: {hairColor}</p>
                <button onClick={this.clickHandler}>Birthday Button for {firstName} {lastName}</button>
                <div class="margin-bottom"></div>
            </div>
        );
    }
}

export default PersonCard;