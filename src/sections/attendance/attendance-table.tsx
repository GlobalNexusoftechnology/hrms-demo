import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import ATTENDANCE from '../../_mock/attendance'

export default function AttendanceTable() {
    return (
        <TableContainer>
            <Table>
                <TableHead sx={{ bgcolor: '#AA00EB', '& .MuiTableCell-root': { color: '#fff' } }}>
                    <TableRow>
                        <TableCell sx={{width: '200px', whiteSpace: 'nowrap'}}>Employee ID</TableCell>
                        <TableCell sx={{width: '200px', whiteSpace: 'nowrap'}}>Date</TableCell>
                        <TableCell sx={{width: '200px', whiteSpace: 'nowrap'}}>Clock-in</TableCell>
                        <TableCell sx={{width: '200px', whiteSpace: 'nowrap'}}>Clock-out</TableCell>
                        <TableCell sx={{width: '200px', whiteSpace: 'nowrap'}}>Late Coming</TableCell>
                        <TableCell sx={{width: '200px', whiteSpace: 'nowrap'}}>Early Going</TableCell>
                        <TableCell align='center' sx={{whiteSpace: 'nowrap'}}>Total Working Time (In Minutes)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ATTENDANCE.map(attendance => (
                        <TableRow>
                            <TableCell sx={{whiteSpace: 'nowrap'}}>{attendance.employeeId}</TableCell>
                            <TableCell sx={{whiteSpace: 'nowrap'}}>{attendance.date}</TableCell>
                            <TableCell sx={{whiteSpace: 'nowrap'}}>{attendance.clockIn}</TableCell>
                            <TableCell sx={{whiteSpace: 'nowrap'}}>{attendance.clockOut}</TableCell>
                            <TableCell sx={{whiteSpace: 'nowrap'}}>{attendance.lateComing}</TableCell>
                            <TableCell sx={{whiteSpace: 'nowrap'}}>{attendance.earlyGoing}</TableCell>
                            <TableCell align='center'>{attendance.totalWorkingTime}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
