import { Box, Button, Card, Container, List, ListItem, ListItemText, Stack, TextField, Typography } from '@mui/material'

export default function ShiftManagementView() {
    const shifts = [
        { name: "Evening shift", time: "4:00 PM - 6:00 PM" },
        { name: "Morning shift", time: "8:00 AM - 10:00 AM" },
        { name: "Mid morning shift", time: "10:00 AM - 12:00 PM" },
        { name: "Lunch shift", time: "12:00 PM - 2:00 PM" },
        { name: "Afternoon shift", time: "2:00 PM - 4:00 PM" },
    ];
    return (
        <Container maxWidth={false} >
            <Card sx={{ m: 3, p: 3 }}>
                <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
                    <Typography variant="h6" align='left' fontWeight={700} gutterBottom>
                        Shift Management
                    </Typography>
                    <Button size='small' variant="contained">New Shift</Button>
                </Stack>

                <Box sx={{ my: 3 }} />

                <TextField
                    variant="outlined"
                    placeholder="Search shifts..."
                    fullWidth
                    size='small'
                />

                <Box sx={{ my: 3 }} />

                <Typography variant="body1" align='left' fontWeight={700} gutterBottom>
                    All shifts
                </Typography>

                <List disablePadding>
                    {shifts.map((shift, index) => (
                        <ListItem
                            key={index}
                            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 0 }}
                            divider
                        >
                            <ListItemText primary={shift.name} secondary={shift.time} />
                            <Button variant="outlined" size="small">Edit</Button>
                        </ListItem>
                    ))}
                </List>


            </Card>
        </Container>
    )
}
