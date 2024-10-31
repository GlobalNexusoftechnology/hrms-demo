import {
    Box,
    Card,
    Chip,
    Container,
    Grid,
    ListItemText,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";

export default function EmployeeManagementView() {
    const employeeInfo = {
        name: "Alison Smith",
        employeeId: "001",
        assignedShift: "8:00 AM - 4:00 PM",
        bufferTime: "15 minutes",
        appliedPersonalWorkTime: "2 hours",
    };

    // const totaltime = totaltime + overtime
    // 483

    /* const totaltime = () => {
  
    const getEarlyGoing(user, date){
       if (earlygoingApproved) return 0
       else {
          return earlygoing // 57
       }
    }
    
    const getLateComing(user, date){
      if (lateComingApproved) return 0
       else {
          return lateComing // 57
       }
    }
    
    const getPersonalWork(user, date){
      if (personalWorkApproved) return 0
       else {
          return personalWork // 57
       }
    }
      totaltime + overtime - getEarlyGoing - getLateComing - getPersonalWork
     2.  480 + 0 - 20 - 0 - 0 (460)
     3. 480 + 0 - 0 - 0 - 0 (480)
    } 
    
     */

    const shifts = [
        {
            date: "01/10/24",
            attendance: "Present",
            startTime: "7:59 AM",
            endTime: "4:03 PM",
            lateComing: 0,
            lateComingApproved: null, // if approved show true, not approved show false, and if on time show null
            earlyGoing: 0,
            earlyGoingApproved: null, // if approved show true, not approved show false, and if on time show null
            personalWork: 0,
            personalWorkApproved: null, // if approved show true, not approved show false, and if on time show null
            overtime: 3,
            overtimeCheckIn: "4.00",
            overtimeCheckOut: "4.03",
            breakTime: "1 hour",
            totalTime: 480,
        },
        {
            date: "02/10/24",
            attendance: "Present",
            startTime: "8:30 AM",
            endTime: "4:00 PM",
            lateComing: 20,
            lateComingApproved: false, // if approved show true, not approved show false, and if on time show null
            earlyGoing: 0,
            earlyGoingApproved: null, // if approved show true, not approved show false, and if on time show null
            personalWork: 0,
            personalWorkApproved: null, // if approved show true, not approved show false, and if on time show null
            overtime: 0,
            overtimeCheckIn: 0,
            overtimeCheckOut: 0,
            breakTime: "1 hour",
            totalTime: 460,
        },
        {
            date: "03/10/24",
            attendance: "Present",
            startTime: "7:59 AM",
            endTime: "3:03 PM",
            lateComing: 0,
            lateComingApproved: null, // if approved show true, not approved show false, and if on time show null
            earlyGoing: 57,
            earlyGoingApproved: true, // if approved show true, not approved show false, and if on time show null
            personalWork: 0,
            personalWorkApproved: null, // if approved show true, not approved show false, and if on time show null
            overtime: 0,
            overtimeCheckIn: 0,
            overtimeCheckOut: 0,
            breakTime: "1 hour",
            totalTime: 480,
        },
    ];

    return (
        <Container maxWidth={false}>
            <Card sx={{ m: 3, p: 3, "& > *": { textAlign: "left" } }}>
                <Typography variant="h6" fontWeight={700} align="left" gutterBottom>
                    Employee details
                </Typography>
                <Typography variant="h4" fontWeight={700} align="left" gutterBottom>
                    {employeeInfo.name}
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <ListItemText primary={"Name"} secondary={employeeInfo.name} />
                    </Grid>
                    <Grid item xs={6}>
                        <ListItemText
                            primary={"Employee ID"}
                            secondary={employeeInfo.employeeId}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <ListItemText
                            primary={"Assigned Shift"}
                            secondary={employeeInfo.assignedShift}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <ListItemText
                            primary={"Buffer Time"}
                            secondary={employeeInfo.bufferTime}
                        />
                    </Grid>
                    {/* <Grid item xs={12}>
                          <ListItemText primary={"Applied Personal Work Time"} secondary={employeeInfo.appliedPersonalWorkTime} />
                      </Grid> */}
                </Grid>
                <Box sx={{ my: 3 }} />
                Suppose an employee has a buffer of 10mins
                <Typography variant="h6" fontWeight={700} gutterBottom>
                    Shifts
                </Typography>
                <TableContainer component={Paper}>
                    <Table
                        sx={{
                            "& .MuiTableCell-root": {
                                whiteSpace: "nowrap",
                            },
                        }}
                    >
                        <TableHead
                            sx={{
                                bgcolor: "#AA00EB",
                                "& .MuiTableCell-root": { color: "#fff" },
                            }}
                        >
                            <TableRow>
                                <TableCell>Date</TableCell>
                                {/* if leave is approved then mark attendance as leave or absent */}
                                <TableCell>Attendance</TableCell>
                                <TableCell>Start time</TableCell>
                                <TableCell>End time</TableCell>
                                <TableCell>Late Coming</TableCell>{" "}
                                {/* 5 min apprived then it will be shown in green color, else it will be in red text color */}
                                <TableCell>Early going</TableCell>{" "}
                                {/* 5 min apprived then it will be shown in green color, else it will be in red text color */}
                                <TableCell>Personal Work</TableCell>
                                {/* (in mins) 5 min apprived then it will be shown in green color, else it will be in red text color */}
                                <TableCell>Overtime</TableCell>{" "}
                                {/* this basically defines the time period */}
                                {/* current time - shift time will be retuned in mins */}
                                <TableCell>Overtime Time In </TableCell>
                                {/* after you shifts end for eg: 6pm (bcoz your shift ends at 6pm) */}
                                <TableCell>Overtime Time out</TableCell>
                                {/* employee punch out time */}
                                <TableCell>Break time</TableCell>
                                <TableCell>Total time</TableCell>
                                {/* whole day work calculation in mins */}
                                {/* <TableCell>Actions</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {shifts.map((shift, index) => (
                                <TableRow key={index}>
                                    <TableCell>{shift.date}</TableCell>
                                    <TableCell>{shift.attendance}</TableCell>
                                    <TableCell>{shift.startTime}</TableCell>
                                    <TableCell>{shift.endTime}</TableCell>

                                    {/* <TableCell>{shift.lateComing}min</TableCell> */}
                                    {/* {shift.lateComingApproved}</TableCell> */}

                                    <TableCell>
                                        <Chip
                                            label={shift.lateComing + "min"}
                                            color={
                                                shift.lateComingApproved ||
                                                    shift.lateComingApproved == null
                                                    ? "success"
                                                    : "error"
                                            }
                                            variant="outlined"
                                        />
                                    </TableCell>

                                    {/* Early Going */}
                                    <TableCell>
                                        <Chip
                                            label={shift.earlyGoing + "min"}
                                            color={
                                                shift.earlyGoingApproved ||
                                                    shift.earlyGoingApproved == null
                                                    ? "success"
                                                    : "error"
                                            }
                                            variant="outlined"
                                        />
                                    </TableCell>

                                    <TableCell>
                                        {/* Early personalWork */}
                                        <Chip
                                            label={shift.personalWork + "min"}
                                            color={
                                                shift.personalWorkApproved ||
                                                    shift.personalWorkApproved == null
                                                    ? "success"
                                                    : "error"
                                            }
                                            variant="outlined"
                                        />
                                    </TableCell>

                                    <TableCell>{shift.overtime}</TableCell>
                                    <TableCell>{shift.overtimeCheckIn}</TableCell>
                                    <TableCell>{shift.overtimeCheckOut}</TableCell>
                                    <TableCell>{shift.breakTime}</TableCell>

                                    <TableCell>{shift.totalTime}</TableCell>
                                    {/* <TableCell>
                      <Button variant="outlined" size="small">
                        Edit
                      </Button>
                    </TableCell> */}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Container>
    );
}  