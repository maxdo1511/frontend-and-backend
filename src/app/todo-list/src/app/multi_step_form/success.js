import {formTheme} from "@/app/multi-step-form/page";
import {AppBar, IconButton, ThemeProvider, Toolbar, Typography} from "@mui/material";
import {AddAlert, Done, ImportContacts} from "@mui/icons-material";

export default function Success(props) {

    return (
        <>
            <ThemeProvider theme={formTheme}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <Done />
                        </IconButton>
                        <Typography variant="h6">
                            Успешная регистрация
                        </Typography>
                    </Toolbar>
                </AppBar>
                <br/>
                <div className='success'>
                    <h2>Спасобо за регистрацию</h2>
                    <br/>
                    <p>Дальнейшие инструкции будут отправлены вам на email</p>
                </div>
            </ThemeProvider>
        </>
    )
}