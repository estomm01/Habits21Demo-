import React, { Component } from 'react';
// import styles from './AddHabitForm.css';

class AddHabitForm extends Component {
    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.durationRef = React.createRef();
        this.createHabit = this.createHabit.bind(this);
        this.daysArrayForHabit = this.daysArrayForHabit.bind(this);
    }

    daysArrayForHabit(days) {
        let array = [];

        for(let i = 1; i <= days; i++) {
            array.push({ dayNo: i, marked: false });
        }

        return array;
    }

    createHabit(e) {
        e.preventDefault();

        const duration = parseInt(this.durationRef.current.value);

        const habit = {
            name: this.nameRef.current.value,
            duration,
            completed: false,
            progress: 0,
            days: this.daysArrayForHabit(duration)
        }

        this.props.addHabit(habit);
        this.props.closeNewHabitForm();
        e.currentTarget.reset();
    }

    render() {
       console.log(this.nameRef)
       // return this.nameRef

        return (
            <form className={ styles.addHabitForm } onSubmit={ this.createHabit }>
                <h3 className={ styles.formHeader }>Add new habit</h3>
                <div className={ styles.question }>
                    <p>What habit do you what do work on?</p>
                    <input
                        name="name"
                        ref={ this.nameRef }
                        type="text"
                        placeholder="e.g. reading every evening"
                        required
                    />
                </div>
                <div className={ styles.question }>
                    <p>How many days you want to work on your habit?</p>
                    <p className={ styles.additionalInfo }>Recommended duration is between 7 to 21 days</p>
                    <input
                        name="duration"
                        ref={ this.durationRef }
                        type="number"
                        min="1"
                        max="21"
                        required/>
                </div>
                <button className={ styles.button } type="submit">Submit</button>
            </form>
        )
    }
}


export default AddHabitForm;
