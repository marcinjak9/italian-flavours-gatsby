import 'react-dates/initialize';
import React, { Component } from 'react'
import moment from 'moment'
import { DayPickerSingleDateController } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css';

class CalendarComponent extends Component {
  state = {
    dates: [],
    mounted: false,
  }

  static getDerivedStateFromProps(props, state) {
    const { dates } = props
    const datesarr = []
    dates.map((date) => {
      const startDate = moment(date.startDate)
      const endDate = moment(date.endDate)
      datesarr.push(startDate)
      const daysDiff = endDate.diff(startDate, 'days')
      for (let i = 0; i < daysDiff; i += 1) {
        datesarr.push(moment(datesarr[i]).add(1, 'day'))
      }
    })

    return { dates: datesarr }
  }

  componentDidMount() {
    this.setState({ mounted: true })
  }

  datesToArray = () => {
    const { dates } = this.props
    const datesarr = []
    dates.map((date) => {
      const startDate = moment(date.startDate)
      const endDate = moment(date.endDate)
      datesarr.push(startDate)
      const daysDiff = endDate.diff(startDate, 'days')
      for (let i = 0; i < daysDiff; i += 1) {
        datesarr.push(moment(datesarr[i]).add(1, 'day'))
      }
    })
    return datesarr
  }

  checkHighlight = (day1) => {
    const { dates } = this.state
    const same = dates.some(day2 => moment(day1).isSame(moment(day2)))
    return same
    // day1 => datesArray(calendar.dates).some(day2 => moment().isSame(day1, day2))
  }


  render() {
    return (
      <div>
        <DayPickerSingleDateController
      // startDate={moment(date.startDate)}
      // endDate={moment(date.endDate)}
      // isDayHighlighted={day1 => datesToArray(calendar.dates).some(day2 => moment(day1).isSame(moment(day2)))}
          isDayHighlighted={day1 => this.checkHighlight(day1)}
          enableOutsideDays
          onPrevMonthClick={() => this.setState(prevState => ({ mounted: !prevState.mounted }))}
          onNextMonthClick={() => this.setState(prevState => ({ mounted: !prevState.mounted }))}
          hideKeyboardShortcutsPanel
          daySize={50}

        />
      </div>
    )
  }
}

export default CalendarComponent
