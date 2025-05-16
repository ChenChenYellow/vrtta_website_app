import { Box, Divider, FormControl, InputLabel, MenuItem, Paper, Select, Typography } from "@mui/material";
import { useState } from "react";
import CommonSX from "~/components/CommonSX";

export default function news() {
    const newsCollection: Array<{ year: number, newsList: Array<{ title: string, content: string }> }> = [
        {
            year: 2024,
            newsList: [
                {
                    title: "This is title for the first news of 2024",
                    content: "This is the content for the first news of 2024"
                },
                {
                    title: "This is title for the second news of 2024",
                    content: "This is the content for the second news of 2024"
                },
                {
                    title: "This is title for the third news of 2024",
                    content: "This is the content for the third news of 2024"
                },
                {
                    title: "This is title for the fourth news of 2024",
                    content: "This is the content for the fourth news of 2024"
                },
            ]
        },
        {
            year: 2025,
            newsList: [
                {
                    title: "This is title for the first news of 2025",
                    content: "This is the content for the first news of 2025"
                },
                {
                    title: "This is title for the second news of 2025",
                    content: "This is the content for the second news of 2025"
                },
                {
                    title: "This is title for the third news of 2025",
                    content: "This is the content for the third news of 2025"
                },
                {
                    title: "This is title for the fourth news of 2025",
                    content: "This is the content for the fourth news of 2025"
                },
            ]
        }
    ]
    const [selectedYear, setSelectedYear] = useState<number | undefined>()
    return <Box>
        <Box sx={{ ...CommonSX.centerChilren }}>
            <Typography variant="h2" >News</Typography>
        </Box>
        <Box sx={{ ...CommonSX.centerChilren }}>
            <FormControl sx={{ width: "200px" }}>
                <InputLabel>Select a year</InputLabel>
                <Select label="Select a year" onChange={(event: { target: { value: number } }) => setSelectedYear(event.target.value)} >
                    {newsCollection.map((n, index) => <MenuItem key={index} value={n.year}> {n.year}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
        <Box sx={{ ...CommonSX.centerChilren }}>
            <Box sx={{ width: "1200px" }}>
                {selectedYear != undefined &&
                    newsCollection.find((n, index) => n.year == selectedYear)?.newsList.map((n, index) =>
                        <Paper key={index} elevation={1} sx={{ mx: 2, my: 2, paddingX: 2, paddingY: 2, backgroundColor: "primary.light" }}>
                            <Box sx={{}}>
                                <Typography variant="subtitle1">{n.title}</Typography>
                            </Box>
                            <Divider />
                            <Box>
                                <Typography variant="body1">{n.content}</Typography>
                            </Box>
                        </Paper>)}
            </Box>
        </Box>
    </Box>
}