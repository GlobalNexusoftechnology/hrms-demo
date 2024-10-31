import { Box, Button, Card, Container, Grid, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

export default function EmployeeManagementView() {
    const employeeInfo = {
        name: "Alison Smith",
        employeeId: "001",
        assignedShift: "8:00 AM - 4:00 PM",
        bufferTime: "15 minutes",
        appliedPersonalWorkTime: "2 hours",
    };

    const shifts = [
        { startTime: "8:00 AM", endTime: "4:00 PM", breakTime: "1 hour", overtime: "N/A", totalTime: "480" },
        { startTime: "8:00 AM", endTime: "4:00 PM", breakTime: "1 hour", overtime: "N/A", totalTime: "480" },
        { startTime: "8:00 AM", endTime: "4:00 PM", breakTime: "1 hour", overtime: "N/A", totalTime: "480" },
    ];

    return (
        <Container maxWidth={false} >
            <Card sx={{ m: 3, p: 3, "& > *": { textAlign: 'left' } }}>

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
                        <ListItemText primary={"Employee ID"} secondary={employeeInfo.employeeId} />
                    </Grid>
                    <Grid item xs={6}>
                        <ListItemText primary={"Assigned Shift"} secondary={employeeInfo.assignedShift} />
                    </Grid>
                    <Grid item xs={6}>
                        <ListItemText primary={"Buffer Time"} secondary={employeeInfo.bufferTime} />
                    </Grid>
                    <Grid item xs={12}>
                        <ListItemText primary={"Applied Personal Work Time"} secondary={employeeInfo.appliedPersonalWorkTime} />
                    </Grid>
                </Grid>

                <Box sx={{ my: 3 }} />

                <Typography variant="h6" fontWeight={700} gutterBottom>
                    Shifts
                </Typography>

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead sx={{ bgcolor: '#AA00EB', '& .MuiTableCell-root': { color: '#fff' } }}>
                            <TableRow>
                                <TableCell>Start time</TableCell>
                                <TableCell>End time</TableCell>
                                <TableCell>Break time</TableCell>
                                <TableCell>Overtime</TableCell>
                                <TableCell>Total time</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {shifts.map((shift, index) => (
                                <TableRow key={index}>
                                    <TableCell>{shift.startTime}</TableCell>
                                    <TableCell>{shift.endTime}</TableCell>
                                    <TableCell>{shift.breakTime}</TableCell>
                                    <TableCell>{shift.overtime}</TableCell>
                                    <TableCell>{shift.totalTime}</TableCell>
                                    <TableCell>
                                        <Button variant="outlined" size="small">Edit</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Container>
    )
}
