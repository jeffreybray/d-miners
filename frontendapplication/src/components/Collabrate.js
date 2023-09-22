import React from "react";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import RoomCard from "./RoomCard";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const styles = (theme) => ({
    root: {
        display: "flex",
    },
    root_input: {
        paddingLeft: "8px",
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        border: "1px solid grey",
        borderRadius: "5px",
        font: "normal normal 300 17px/35px Roboto",
        color: "grey",
        height: "40px",
        marginRight: "18px",
    },
});


class Collabrate extends React.Component {
    state = {
        eventDetails: [],
        isShowCard:true,
        newEventDetails: [],
    };

    componentWillMount(){
       let data=[
           {
               "id": "1",
               "name": "Eunice Carter",
               "location": "Denton",
               "time": "9am-10am",
               "date": "2022-04-24",
               "status": "Filled",
               "providers": [
                   {
                       "id": "12",
                       "name": "La Red health care centre",
                       "cabinIdId": "1"
                   }
               ]
           },
           {
               "id": "10",
               "name": " ",
               "location": "",
               "time": "",
               "date": "",
               "status": "Vacant",
               "providers": [
                   {
                       "id": "13",
                       "name": "Brindy counselling community services",
                       "cabinIdId": "10"
                   }
               ]
           },
           {
               "id": "11",
               "name": "Richard Jones\r\n",
               "location": "Arkansas",
               "time": "1pm-2pm",
               "date": "2022-04-14",
               "status": "Filled",
               "providers": [
                   {
                       "id": "10",
                       "name": "La Red health care centre",
                       "cabinIdId": "11"
                   },
                   {
                       "id": "107",
                       "name": "La Red health care centre",
                       "cabinIdId": "11"
                   },
                   {
                       "id": "108",
                       "name": "La Red health care centre",
                       "cabinIdId": "11"
                   },
                   {
                       "id": "11",
                       "name": "La Red health care centre",
                       "cabinIdId": "11"
                   },
                   {
                       "id": "9",
                       "name": "La Red health care centre",
                       "cabinIdId": "11"
                   }
               ]
           },
           {
               "id": "12",
               "name": "Kelly Sturgis",
               "location": "Alaska",
               "time": "11am-12am",
               "date": "2022-04-12",
               "status": "Filled",
               "providers": [
                   {
                       "id": "14",
                       "name": "Brindy counselling community services",
                       "cabinIdId": "12"
                   }
               ]
           },
           {
               "id": "13",
               "name": "Jessica Wagner",
               "location": "Kansas",
               "time": "1pm-2pm",
               "date": "2022-04-21",
               "status": "Filled",
               "providers": [
                   {
                       "id": "16",
                       "name": "Brindy counselling community services",
                       "cabinIdId": "13"
                   }
               ]
           },
           {
               "id": "14",
               "name": "Wendy Armstrong",
               "location": "Buffalo",
               "time": "1pm-2pm",
               "date": "2022-04-20",
               "status": "Filled",
               "providers": []
           },
           {
               "id": "15",
               "name": "Darrell  Stanley",
               "location": "Dallas",
               "time": "10am-12pm",
               "date": "2022-04-16",
               "status": "Filled",
               "providers": [
                   {
                       "id": "104",
                       "name": "Brindy counselling community services",
                       "cabinIdId": "15"
                   }
               ]
           },
           {
               "id": "16",
               "name": "Kristen Stevenson/Baker",
               "location": "Arkansas",
               "time": "1pm-2pm",
               "date": "2022-04-14",
               "status": "Filled",
               "providers": []
           },
           {
               "id": "17",
               "name": "James  Fisher",
               "location": "Austin",
               "time": "5pm-7pm",
               "date": "2022-04-12",
               "status": "Filled",
               "providers": [
                   {
                       "id": "17",
                       "name": "Brindy counselling community services",
                       "cabinIdId": "17"
                   }
               ]
           },
           {
               "id": "18",
               "name": "Kevin  Roberts",
               "location": "District of Columbia",
               "time": "7pm-8pm",
               "date": "2022-04-13",
               "status": "Filled",
               "providers": [
                   {
                       "id": "19",
                       "name": "Brindy counselling community services",
                       "cabinIdId": "18"
                   }
               ]
           },
           {
               "id": "19",
               "name": "Darrie Bryant ",
               "location": "Denton",
               "time": "9am-11am",
               "date": "2022-04-19",
               "status": "Filled",
               "providers": [
                   {
                       "id": "106",
                       "name": "Brindy counselling community services",
                       "cabinIdId": "19"
                   }
               ]
           },
           {
               "id": "2",
               "name": "Wendy Bowen",
               "location": "Dallas",
               "time": "9pm-10pm",
               "date": "2022-04-15",
               "status": "Filled",
               "providers": [
                   {
                       "id": "101",
                       "name": "Brindy counselling community services",
                       "cabinIdId": "2"
                   }
               ]
           },
           {
               "id": "20",
               "name": "Jenniffier McErlane",
               "location": "Arizona",
               "time": "8am-10am",
               "date": "2022-04-19",
               "status": "Filled",
               "providers": [
                   {
                       "id": "105",
                       "name": "Brindy counselling community services",
                       "cabinIdId": "20"
                   }
               ]
           },
           {
               "id": "22",
               "name": "John Belfield",
               "location": "florida",
               "time": "7pm-8pm",
               "date": "2022-04-23",
               "status": "Filled",
               "providers": []
           },
           {
               "id": "23",
               "name": "Jeffrey Botts",
               "location": "texas",
               "time": "4pm-5pm",
               "date": "2022-04-25",
               "status": "Filled",
               "providers": []
           },
           {
               "id": "24",
               "name": "Freddie Carswel",
               "location": "Austin",
               "time": "1pm-2pm",
               "date": "2022-04-27",
               "status": "Filled",
               "providers": []
           },
           {
               "id": "25",
               "name": "Luis Gibbs",
               "location": "arkansas",
               "time": "",
               "date": "2022-04-27",
               "status": "Filled",
               "providers": [
                   {
                       "id": "15",
                       "name": "Brindy counselling community services",
                       "cabinIdId": "25"
                   }
               ]
           },
           {
               "id": "26",
               "name": "Jacob (Wes) Morris",
               "location": "connecticut",
               "time": "10am-11am",
               "date": "2022-04-19",
               "status": "Filled",
               "providers": []
           },
           {
               "id": "27",
               "name": "Kathleen Baker\r\n",
               "location": "connecticut",
               "time": "10am-11am",
               "date": "2022-04-27",
               "status": "Filled",
               "providers": []
           },
           {
               "id": "28",
               "name": "Joyce Freck",
               "location": "connecticut",
               "time": "1pm-2pm",
               "date": "2022-04-20",
               "status": "Filled",
               "providers": [
                   {
                       "id": "18",
                       "name": "Brindy counselling community services",
                       "cabinIdId": "28"
                   }
               ]
           },
           {
               "id": "29",
               "name": "Joy Warner",
               "location": "colorado",
               "time": "4pm-5pm",
               "date": "2022-04-13",
               "status": "Filled",
               "providers": []
           },
           {
               "id": "3",
               "name": "",
               "location": "",
               "time": "",
               "date": "",
               "status": "Vacant",
               "providers": [
                   {
                       "id": "103",
                       "name": "Brindy counselling community services",
                       "cabinIdId": "3"
                   }
               ]
           },
           {
               "id": "30",
               "name": "Bobby Terry",
               "location": "delaware",
               "time": "4pm-5pm",
               "date": "2022-04-17",
               "status": "Filled",
               "providers": []
           },
           {
               "id": "4",
               "name": "Clyde  Parker",
               "location": "Little Elm",
               "time": "1pm-3pm",
               "date": "2022-04-16",
               "status": "Filled",
               "providers": []
           },
           {
               "id": "5",
               "name": " ",
               "location": " ",
               "time": "",
               "date": "",
               "status": "Vacant",
               "providers": []
           },
           {
               "id": "6",
               "name": "Rebecca Lyons",
               "location": "New York",
               "time": "9am-11am",
               "date": "2022-04-18",
               "status": "Filled",
               "providers": []
           },
           {
               "id": "7",
               "name": "Margaret Carter",
               "location": "Atlanta",
               "time": "9am-10am",
               "date": "2022-04-14",
               "status": "Filled",
               "providers": []
           },
           {
               "id": "8",
               "name": "Jacqueline Tolbert",
               "location": "Austin",
               "time": "5pm-7pm",
               "date": "2022-04-17",
               "status": "Filled",
               "providers": []
           },
           {
               "id": "9",
               "name": "Fracyne Morton",
               "location": "Plano",
               "time": "9pm-11pm",
               "date": "2022-04-25",
               "status": "Filled",
               "providers": [
                   {
                       "id": "102",
                       "name": "La Red health care centre",
                       "cabinIdId": "9"
                   }
               ]
           }
       ]
        this.setState({eventDetails:data})


    }

    handleDisplayValue=(value,data)=>{
        this.setState({
            isShowCard:value,
            providerDetails:data
        })
    }

    handleBack=()=>{
        this.setState({isShowCard:true,providerDetails:[]})
    }

    render() {
        const {
            eventDetails,isShowCard,providerDetails
        } = this.state;


        return (
            <div className="flex justify-center"  >
                {isShowCard ? <div style={{flexWrap:'wrap',display:'flex',justifyContent:'center'}}>
                        {eventDetails.map((data)=>
                            <RoomCard eventDetails={data} isDisplayCard={this.handleDisplayValue}/>
                        )}</div>:
                    <div style={{'margin-top': 36}}>
                        <Button style={{'padding':1,'margin-bottom':6,'backgroundColor':'cadetblue'}} onClick={this.handleBack}>Back</Button>
                        {providerDetails.providers?.length>0 ?
                            <TableContainer component={Paper}>
                                <Table aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>Provider Name</StyledTableCell>
                                            <StyledTableCell align="center">CABIN ID</StyledTableCell>
                                            <StyledTableCell align="center">CABIN Name</StyledTableCell>
                                            <StyledTableCell align="center">CABIN Location</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {providerDetails.providers.map((row) => (
                                            <StyledTableRow key={row.name}>
                                                <StyledTableCell component="th">
                                                    {row.name}
                                                </StyledTableCell>
                                                <StyledTableCell align="center">{row.cabinIdId}</StyledTableCell>
                                                <StyledTableCell align="center">{providerDetails.name}</StyledTableCell>
                                                <StyledTableCell align="center">{providerDetails.location}</StyledTableCell>

                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>:<h1>No providers</h1>}
                    </div> }

            </div>
        );
    }
}

export default withStyles(styles)(Collabrate);
