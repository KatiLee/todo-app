import { createStyles, Navbar, test } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    navbar: {
        backgroundColor: theme.colors.blue[7],
        height: '100%',
        color: theme.colors.gray[0],
        fontSize: theme.fontSizes.md,
        padding: theme.spacing.md,
    }
}));

function Header() {
    const { classes } = useStyles();

    return (
        <header>
            <Navbar className={classes.navbar}>
                <text>Home</text>
            </Navbar>
        </header>
    )
}

export default Header;