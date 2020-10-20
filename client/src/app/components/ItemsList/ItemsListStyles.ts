import { makeStyles } from "@material-ui/core";

export default makeStyles({
    cardList: {
        padding: "20px",
        borderBottom: "1px solid gray"
    },
    productContainer: {
        margin: "10px",
        '@media (max-width: 599.95px)': {
            marginBottom: "40px"
        },
    },
    productInfoContainer: {
        height: "100px",
        paddingLeft: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    productImage: {
        width: "150px",
        '@media (max-width: 599.95px)': {
            width: "90px"
        },
        height: "auto",
        paddingLeft: "20px",
        paddingRight: "20px",
        border: "1px solid gray"
    }
});
