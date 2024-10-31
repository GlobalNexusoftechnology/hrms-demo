import { Chip, Stack, Typography } from '@mui/material'

// ---------------------------------------------------------------

const REPORT_POINTS = ["Total minutes for Late Coming", "Total minutes for Early Going", "Total minutes for Working Time", "Total minutes for Approved Personal Work Time", "Total minutes for Unapproved Personal Work Time"]

// ---------------------------------------------------------------

export default function ReportDetails() {
    return (
        <section>
            <Typography variant='body1' mb={1.5} fontWeight={700} align='left'>Report details</Typography>
            <Stack direction={'row'} flexWrap={'wrap'} columnGap={2} rowGap={2}>
                {REPORT_POINTS.map(point => <Chip label={point} sx={{cursor: 'pointer'}} />)}
            </Stack>
        </section>
    )
}
