import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import axios from "axios";

const eventBaseUrl = "http://localhost:8080/hackathon/createcabin";


const styles = (theme) => ({
    root: {
        display: "flex",

    },

});


class CreateCabin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "1",
            name: "",
            location: "",
            time: "",
            eventType:"",
            date:"",
            shouldAlertDisplay: false,
            shouldErrorMessageDisplay: false,

        };
    }

    handleEventNameChange = (e) => {
        this.setState({ name: e.target.value });
        console.log("evenet mame is : "+e.target.value)
    };

    handleEventTypeChange = (e) => {
        this.setState({ eventType: e.target.value });
        console.log("handleEventTypeChange  is : "+e.target.value)

    };

    handleLocationChange = (e) => {
        this.setState({ location: e.target.value });
        console.log("handleLocationChange  is : "+e.target.value)

    };

    handleTimeChange = (e) => {
        this.setState({ time: e.target.value });
        console.log("handleTimeChange: "+e.target.value)

    };

    handleDateChange = (e) => {
        this.setState({ date: e.target.value });
        console.log("handleDateChange mame is : "+e.target.value)

    };

    handleSubmit = () => {
        const { id, name, location, time ,eventType,date} = this.state;
        // const {
        //     history: { push },
        // } = this.props;
        // {
        //     this.setState({ shouldAlertDisplay: true });
        //     //return;
        // }
        const reqJson={
            id:id,
            name:name,
            location:location,
            time:time,
            eventType:eventType,
            date:date,
            shouldAlertDisplay: false,
            shouldErrorMessageDisplay: false,
            eventErrorMessage:"",
            isEventError:false,
        }
        console.log("json is "+reqJson)
        axios.post(eventBaseUrl,reqJson).then((res) => {
            console.log("jsodsfsfdn is "+reqJson)
            if(res.data.isEventCreated)
            {

                alert("Event has been created  Successfully")
            }
            if(!res.data.isEventCreated){
                this.setState({
                    signupErrorMessage:res.data.message,
                    shouldErrorMessageDisplay:true
                })

                alert("Event has not been created please re enter the date ")
            }
        });
    };


    render() {
        const { id, name, location, time, eventType,date,shouldErrorMessageDisplay,shouldAlertDisplay,eventErrorMessage, isEventError} =
            this.state;

        return (
            <div className="createevent">

                <div className="flex flex-col space-y-5 max-w-md mx-auto my-16 min-w-500">
                    <h2 className="text-4xl font-semibold text-blue-800">Create Cabin</h2>
                    <p className="ptag">Please select the sports</p>
                    <select    required
                               id="outlined-username"
                               value={name}
                               label="name"
                               autoComplete="off"

                               onChange={(e) => this.handleEventNameChange(e)}>

                        <option value="LongJump">LongJump</option>
                        <option value="Cricket">Cricket</option>
                        <option value="Baseball">Baseball</option>
                        <option value="VolleyBall">VolleyBall</option>
                        <option value="TableTennis">TableTennis</option>
                        <option value="Badminton">Badminton</option>
                        <option value="Shooting">Shooting</option>
                        <option value="Wrestling">Wrestling</option>
                        <option value="Chess">Chess</option>
                        <option value="Carroms">Carroms</option>
                    </select>
                    <br></br>
                    <p  className="ptag">Please select the location</p>
                    <select required
                            id="outlined-location"
                            value={location}
                            label="location"
                            onChange={(e) => this.handleLocationChange(e)}>
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="Arizona">Arizona</option>
                        <option value="Arkansas">Arkansas</option>
                        <option value="California">California</option>
                        <option value="Colorado">Colorado</option>
                        <option value="Connecticut">Connecticut</option>
                        <option value="Delaware">Delaware</option>
                        <option value="District of Columbia">District of Columbia</option>
                        <option value="Florida">Florida</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Guam">Guam</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Idaho">Idaho</option>
                        <option value="Illinois">Illinois</option>
                        <option value="Indiana">Indiana</option>
                        <option value="Iowa">Iowa</option>
                        <option value="Kansas">Kansas</option>
                        <option value="Kentucky">Kentucky</option>
                        <option value="Louisiana">Louisiana</option>
                        <option value="Maine">Maine</option>
                        <option value="Maryland">Maryland</option>
                        <option value="Massachusetts">Massachusetts</option>
                        <option value="Michigan">Michigan</option>
                        <option value="Minnesota">Minnesota</option>
                        <option value="Mississippi">Mississippi</option>
                        <option value="Missouri">Missouri</option>
                        <option value="Montana">Montana</option>
                        <option value="Nebraska">Nebraska</option>
                        <option value="Nevada">Nevada</option>
                        <option value="New Hampshire">New Hampshire</option>
                        <option value="New Jersey">New Jersey</option>
                        <option value="New Mexico">New Mexico</option>
                        <option value="New York">New York</option>
                        <option value="North Carolina">North Carolina</option>
                        <option value="North Dakota">North Dakota</option>
                        <option value="Northern Marianas Islands">Northern Marianas Islands</option>
                        <option value="Ohio">Ohio</option>
                        <option value="Oklahoma">Oklahoma</option>
                        <option value="Oregon">Oregon</option>
                        <option value="Pennsylvania">Pennsylvania</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Rhode Island">Rhode Island</option>
                        <option value="South Carolina">South Carolina</option>
                        <option value="South Dakota">South Dakota</option>
                        <option value="Tennessee">Tennessee</option>
                        <option value="Texas">Texas</option>
                        <option value="Utah">Utah</option>
                        <option value="Vermont">Vermont</option>
                        <option value="Virginia">Virginia</option>
                        <option value="Virgin Islands">Virgin Islands</option>
                        <option value="Washington">Washington</option>
                        <option value="West Virginia">West Virginia</option>
                        <option value="Wisconsin">Wisconsin</option>
                        <option value="Wyoming">Wyoming</option>
                    </select>

                    <br></br>

                    <p  className="ptag">Please select the Time</p>
                    <select  required
                             id="outlined-eventType"
                             label="time"
                             value={time}
                             type="eventType"
                             onChange={(e) => this.handleTimeChange(e)}>
                        <option value="9am-10am">9am-10am</option>
                        <option value="10am-11am">10am-11am</option>
                        <option value="11am-12am">11am-12pm</option>
                        <option value="12pm-1pm">12pm-1pm</option>
                        <option value="1pm-2pm">1pm-2pm</option>
                        <option value="2pm-3pm">2pm-3pm</option>
                        <option value="3pm-4pm">3pm-4pm</option>
                        <option value="4pm-5pm">4pm-5pm</option>
                        <option value="5pm-6pm">5pm-6pm</option>
                        <option value="6pm-7pm">6pm-7pm</option>
                        <option value="7pm-8pm">7pm-8pm</option>
                        <option value="8pm-9pm">8pm-9pm</option>
                    </select>
                    <br></br>
                    <p  className="ptag">Please select the Date</p>
                    <input type="date" id="birthday" name="birthday"
                           required
                           id="outlined-date"
                           label="date"
                           value={date}
                           type="date"
                           onChange={(e) => this.handleDateChange(e)}/>

                    <br></br>

                    <div className="flex items-center justify-between">
                        <Button variant="contained" onClick={this.handleSubmit}>
                            Submit
                        </Button>
                    </div>
                </div>
                {/*{shouldAlertDisplay &&*/}
                {/*<Alert severity="error">Field cannot be empty</Alert>*/}
                {/*}*/}
                {/*{shouldErrorMessageDisplay &&*/}
                {/*<Alert severity="error"> {isEventError} </Alert>*/}
                {/*}*/}

            </div>
        );
    }
}

export default withStyles(styles)(CreateCabin);
