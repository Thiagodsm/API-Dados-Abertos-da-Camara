import { Typography, AppBar, Toolbar } from "@material-ui/core"

export default function Footer() {
    return (
    <AppBar position="static" color="primary">
        <Toolbar>
            <Typography variant="body1" color="inherit">
            © 2019 Thiago
            </Typography>
        </Toolbar>
    </AppBar>
    )
}