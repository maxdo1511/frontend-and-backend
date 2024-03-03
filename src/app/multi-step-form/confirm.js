import {
    AppBar,
    Button,
    IconButton,
    List,
    ListItem,
    ListItemText,
    ThemeProvider,
    Toolbar,
    Typography
} from "@mui/material";
import {formTheme} from "@/app/multi-step-form/page";
import {ArrowBackIos, ArrowForwardIos, Create, ImportContacts} from "@mui/icons-material";

export default function Confirm(props) {
    return (
        <>
            <ThemeProvider theme={formTheme}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <Create />
                        </IconButton>
                        <Typography variant="h6">
                            Проверьте данные
                        </Typography>
                    </Toolbar>
                </AppBar>
                <br/>
                <List>
                    <ListItem>
                        <ListItemText primary="Имя" secondary={props.state.firstName} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Фамилия" secondary={props.state.lastName} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Email" secondary={props.state.email} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Место работы" secondary={props.state.occupation} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Город" secondary={props.state.city} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Биография" secondary={props.state.bio} />
                    </ListItem>
                </List>
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