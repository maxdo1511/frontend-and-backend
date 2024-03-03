import {AppBar, Button, IconButton, TextField, ThemeProvider, Toolbar, Typography} from "@mui/material";
import {formTheme} from "@/app/multi-step-form/page";
import {AddModerator, ArrowBackIos, ArrowForwardIos, ImportContacts} from "@mui/icons-material";

export default function FormUserPersonalDetails(props) {

    return (
        <>
            <ThemeProvider theme={formTheme}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <AddModerator />
                        </IconButton>
                        <Typography variant="h6">
                            Личная информация
                        </Typography>
                    </Toolbar>
                </AppBar>
                <br/>
                <TextField
                    label="Место работы"
                    placeholder="Где вы работаете"
                    onChange={props.handleChange("occupation")}
                    defaultValue={props.state.occupation}
                />
                <br />
                <TextField
                    label="Город"
                    placeholder="Введите город"
                    onChange={props.handleChange("city")}
                    defaultValue={props.state.city}
                />
                <br />
                <TextField
                    label="Биография"
                    placeholder="Раскажите немного о себе"
                    onChange={props.handleChange("bio")}
                    value={props.state.bio}
                />
                <br />
                <div className={"flex justify-center flex-row pl-8 pr-8"}>
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<ArrowBackIos/>}
                        onClick={props.stepBackward}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<ArrowForwardIos/>}
                        onClick={props.stepForward}
                    />
                </div>
            </ThemeProvider>
        </>
    )
}