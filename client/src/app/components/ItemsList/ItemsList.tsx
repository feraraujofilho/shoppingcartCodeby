import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { convertCentsIntoReais } from "../../helpers";
import { ProductProps } from "../../interfaces";
import ItemsListProps from "./ItemsListProps";
import useStyles from "./ItemsListStyles";

const ItemsList: FC<ItemsListProps> = ({ products }) => {
    const classes = useStyles();

    return (
        <List className={classes.cardList}>
            {products && products.length > 0 ? (
                products?.map((product: ProductProps) => {
                    return (
                        <ListItem className={classes.productContainer} key={product.id}>
                            <img
                                className={classes.productImage}
                                src={product.imageUrl}
                                alt={product.name}
                            />
                            <div className={classes.productInfoContainer}>
                                <ListItemText
                                    primary={
                                        <Typography style={{ fontWeight: "bold" }}>
                                            {product.name}
                                        </Typography>
                                    }
                                />
                                <ListItemText
                                    primary={
                                        <Typography style={{ color: "gray", fontSize: "0.8em" }}>
                                            {convertCentsIntoReais(product.listPrice)}
                                        </Typography>
                                    }
                                    secondary={
                                        <Typography style={{ fontSize: "1em" }}>
                                            {convertCentsIntoReais(product.sellingPrice)}
                                        </Typography>
                                    }
                                />
                            </div>
                        </ListItem>
                    );
                })
            ) : (
                <ListItemText primary={<Typography>Nenhum produto foi encontrado!</Typography>} />
            )}
        </List>
    );
};

export default ItemsList;
