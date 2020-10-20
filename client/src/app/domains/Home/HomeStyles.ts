import { makeStyles } from "@material-ui/core";

export default makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#d2d8e4"
    },
    cardRoot: {
        minHeight: "400px",
        margin: "60px",
        borderRadius: "15px"
    },
    cardContent: {
        padding: "10px 0px"
    },
    cardTitle: {
        borderBottom: "1px solid gray",
        textAlign: "center",
        padding: "20px",
        fontWeight: "bold"
    },
    buttonContainer: {
        margin: "2em 2em 0 2em"
    },
    buttonRoot: {
        padding: "20px",
        borderRadius: "5px",
        fontWeight: "bold",
        fontSize: "1.2em"
    },
    buttonLabel: {
        textTransform: "capitalize"
    },
    freeShippingText: {
        textAlign: "center",
        marginTop: "10px",
        color: "green",
        backgroundColor: "#d3fcaf",
        borderRadius: "20px",
        padding: "10px",
        fontWeight: 500,
        fontSize: "1.1em"
    },
    totalPriceContainer: {
        padding: "30px 40px",
        borderBottom: "1px solid gray",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between"
    },
    totalTextsBox: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between"
    },
    totalTypography: { fontWeight: "bold", fontSize: "1.5em" }
});
