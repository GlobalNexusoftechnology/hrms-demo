/* eslint-disable @typescript-eslint/no-explicit-any */
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
    assignedShift: "9:30 AM - 18:30 PM",
    bufferTime: "15 minutes",
    appliedPersonalWorkTime: "2 hours",
  };

  // const totaltime = totaltime + overtime
  // 483

  const getEarlyGoing = (data: any) => {
    // if (data.earlygoingApproved) return 0;
    // else {
    return data.earlyGoing; // 57
    // }
  };

  const getLateComing = (data: any) => {
    // if (data.lateComingApproved) return 0;
    // else {
    return data.lateComing; // 57
    // }
  };

  const getPersonalWork = (data: any) => {
    // if (data.personalWorkApproved) return 0;
    // else {
    return data.personalWork; // 57
    // }
  };
  //   totaltime + overtime - getEarlyGoing - getLateComing - getPersonalWork

  //  2.  480 + 0 - 20 - 0 - 0 (460)
  //  3. 480 + 0 - 0 - 0 - 0 (480)

  const totalTime = (data: any) => {
    const getEarlyGoingTime = getEarlyGoing(data);
    const getLateComingTime = getLateComing(data);
    const getPersonalWorkTime = getPersonalWork(data);

    const allTotal =
      getEarlyGoingTime + getLateComingTime + getPersonalWorkTime - 15;

    const data1 = data.totalTime + data.overtime - allTotal;

    // getEarlyGoingTime -
    // getLateComingTime -
    // getPersonalWorkTime;
    console.log(data1, "dara1", allTotal);

    return data1;
  };

  const shifts = [
    {
      date: "04/09/24",
      attendance: "Present",
      startTime: "09:52",
      endTime: "19:03",
      lateComing: 22,
      lateComingApproved: true, // if approved show true, not approved show false, and if on time show null
      earlyGoing: 0,
      earlyGoingApproved: null, // if approved show true, not approved show false, and if on time show null
      personalWork: 0,
      personalWorkApproved: null, // if approved show true, not approved show false, and if on time show null
      overtime: 0,
      overtimeCheckIn: "",
      overtimeCheckOut: "",
      // breakTime: "1 hour",
      totalTime: 540,
    },
    {
      date: "06/09/24",
      attendance: "Present",
      startTime: "09:53",
      endTime: "19:00",
      lateComing: 23,
      lateComingApproved: true, // if approved show true, not approved show false, and if on time show null
      earlyGoing: 0,
      earlyGoingApproved: null, // if approved show true, not approved show false, and if on time show null
      personalWork: 0,
      personalWorkApproved: null, // if approved show true, not approved show false, and if on time show null
      overtime: 0,
      overtimeCheckIn: 0,
      overtimeCheckOut: 0,
      // breakTime: "1 hour",
      totalTime: 540,
    },
    {
      date: "11/09/24",
      attendance: "Present",
      startTime: "09:57 AM",
      endTime: "19:32 PM",
      lateComing: 27,
      lateComingApproved: true, // if approved show true, not approved show false, and if on time show null
      earlyGoing: 0,
      earlyGoingApproved: null, // if approved show true, not approved show false, and if on time show null
      personalWork: 0,
      personalWorkApproved: null, // if approved show true, not approved show false, and if on time show null
      overtime: 0,
      overtimeCheckIn: 0,
      overtimeCheckOut: 0,
      // breakTime: "1 hour",
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
        Suppose an employee has a buffer of 15 mins
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
                  {/* <TableCell>{shift.breakTime}</TableCell> */}

                  <TableCell>{totalTime(shift)}</TableCell>
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
