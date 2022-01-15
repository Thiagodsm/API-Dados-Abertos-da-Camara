import { Typography, AppBar, Toolbar } from "@material-ui/core"

export default function Footer() {
    return (
    <AppBar position="static" color="primary">
        <Toolbar>
            <Typography variant="body1" color="inherit" align="center">
            &copy; {new Date().getFullYear()} - TSM Consultoria
            </Typography>
        </Toolbar>
    </AppBar>
    )
}



