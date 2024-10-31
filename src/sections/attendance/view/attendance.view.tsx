import { Box, Card, Chip, Container, Stack, Typography } from '@mui/material'
import AttendanceTable from '../attendance-table'

export default function AttendanceView() {
    return (
        <Container maxWidth={false} >
            <Card sx={{ m: 3, p: 3 }}>
                <Typography variant='h6' fontWeight={600} align='left'>Attendance</Typography>
                <Box sx={{ my: 3 }} />
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                    <Typography>Filter by: </Typography>
                    <Stack direction={'row'} spacing={2}>
                        <Chip sx={{ cursor: 'pointer' }} label="All" />
                        <Chip sx={{ cursor: 'pointer' }} label="Present" />
                        <Chip sx={{ cursor: 'pointer' }} label="Absent" />
                        <Chip sx={{ cursor: 'pointer' }} label="Leave" />
                    </Stack>
                </Stack>
                <Box sx={{ my: 3 }} />
                <Typography variant='body1' fontWeight={600} align='left' mb={2}>Attendance Records</Typography>
                <Box sx={{ my: 3 }} />
                <AttendanceTable />
            </Card>
        </Container>
    )
}
