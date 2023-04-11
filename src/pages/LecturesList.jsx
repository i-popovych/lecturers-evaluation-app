import React from 'react';
import Grid from "@mui/material/Grid";
import LecturesListItem from "../components/LectureListItem"

const LecturesList = () => {
    return (
        <Grid container spacing={2} justifyContent={"center"} marginTop={5}>
            <LecturesListItem/>
        </Grid>
    );
};

export default LecturesList;