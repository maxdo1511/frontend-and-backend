import {AppBar, Button, IconButton, TextField, ThemeProvider, Toolbar, Typography} from "@mui/material";
import {formTheme} from "@/app/multi-step-form/page";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {AccountBox, ArrowForwardIos, ImportContacts, InsertEmoticon} from "@mui/icons-material";
import {useEffect, useRef} from "react";

export default function FormUserDetails(props) {

    return (
        <>
            <ThemeProvider theme={formTheme}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <AccountBox />
                        </IconButton>
                        <Typography variant="h6">
                            Общие сведения
                        </Typography>
                    </Toolbar>
                </AppBar>
                <br/>
                <TextField
                    label="Имя"
                    placeholder="Введите ваше имя"
                    onChange={props.handleChange("firstName")}
                    value={props.state.firstName}
                    inputProps={{ style: { textAlign: 'left' } }}
                />
                <br />
                <TextField
                    label="Фамилия"
                    placeholder="Введите фамилию"
                    onChange={props.handleChange("lastName")}
                    value={props.state.lastName}
                />
                <br />
                <TextField
                    label="Email"
                    placeholder="Введите email"
                    onChange={props.handleChange("email")}
                    value={props.state.email}
                />
                <br />
                <div className={"flex justify-center"}>
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<ArrowForwardIos />}
                        onClick={props.stepForward}
                    />
                </div>
            </ThemeProvider>
        </>
    )
}