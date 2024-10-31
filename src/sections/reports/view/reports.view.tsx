import { useState } from 'react';
import {
    Box,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    Button,
    Container,
    Card,
    Stack,
} from '@mui/material';
import ReportDetails from './report-details';

// Sample JSON data for employees
const employeeData = [
    { id: 'all', name: 'All employees' },
    { id: 'employee1', name: 'Employee 1' },
    { id: 'employee2', name: 'Employee 2' },
];

const ReportsView = () => {
    const [employees, setEmployees] = useState('all');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [approvedTime, setApprovedTime] = useState(false);
    const [unapprovedTime, setUnapprovedTime] = useState(false);

    const generateReport = () => {
        // Logic to generate report
        console.log('Generating report...');
    };

    return (
        <Container maxWidth={false} >
            <Card sx={{ m: 3, p: 3 }}>

                <Box>
                    <Typography variant="h6" fontWeight={700} align='left'>Generate attendance reports</Typography>
                    <Box sx={{ my: 3 }} />
                    <FormControl size='small' fullWidth margin="normal" sx={{ textAlign: 'left' }}>
                        <InputLabel>Select employees</InputLabel>
                        <Select
                            label="Select employees"
                            value={employees}
                            onChange={(e) => setEmployees(e.target.value)}
                        >
                            {employeeData.map((employee) => (
                                <MenuItem key={employee.id} value={employee.id}>
                                    {employee.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Box sx={{ my: 3 }} />

                    <Typography variant='body1' mb={1.5} fontWeight={700} align='left'>Select date range</Typography>
                    <Box display="flex" gap={2}>
                        <TextField
                            size='small'
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            size='small'
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Box>

                    <Box sx={{ my: 3 }} />


                    <Typography variant='body1' mb={1.5} fontWeight={700} align='left'>Include personal work time</Typography>
                    <Stack direction={'row'} spacing={2}>
                        {/* <ButtonGroup size='small' variant="contained" aria-label="outlined primary button group"> */}
                        <Button
                            size='small'
                            variant='outlined'
                            onClick={() => setApprovedTime(!approvedTime)}
                            className={approvedTime ? 'active' : ''}
                        >
                            Include approved time off
                        </Button>
                        <Button
                            size='small'
                            onClick={() => setUnapprovedTime(!unapprovedTime)}
                            variant='outlined'
                            className={unapprovedTime ? 'active' : ''}
                        >
                            Include unapproved time off
                        </Button>
                        {/* </ButtonGroup> */}
                    </Stack>

                    <Box sx={{ my: 3 }} />

                    {/* Assuming ReportDetails is another component */}
                    <ReportDetails />

                    <Stack direction={'row'} justifyContent={'flex-end'} gap={2} marginTop={3}>
                        <Button size='small' variant="outlined" className="cancel">Cancel</Button>
                        <Button size='small' variant="contained" className="generate" onClick={generateReport}>
                            Generate report
                        </Button>
                    </Stack>
                </Box>
            </Card>
        </Container>
    );
};

export default ReportsView;
