import React, { FC, useEffect, useState } from "react";
import useStyles from "./HomeStyles";
import { Button, Card, CardContent, Typography } from "@material-ui/core";
import Axios from "axios";
import { ProductProps } from "../../interfaces";
import ItemsList from "../ItemsList/ItemsList";
import { convertCentsIntoReais } from "../../helpers";

const Home: FC = () => {
    const classes = useStyles();

    const [products, setProducts] = useState<ProductProps[] | null>(null);
    const [error, setError] = useState();

    useEffect(() => {
        Axios.get("http://localhost:4000/")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                setError(err);
            });
    }, []);

    const calculateTotal = () => {
        if (products) {
            return products.reduce((acc: number, val: ProductProps) => {
                acc += val.sellingPrice;
                return acc;
            }, 0);
        }
        return 0;
    };

    return (
        <div className={classes.root}>
            <Card elevation={9} className={classes.cardRoot}>
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.cardTitle} component="h1" variant="h4">
                        Meu carrinho
                    </Typography>
                    <ItemsList products={products} />
                    <div className={classes.totalPriceContainer}>
                        <div className={classes.totalTextsBox}>
                            <Typography className={classes.totalTypography}>Total</Typography>
                            <Typography className={classes.totalTypography}>
                                {convertCentsIntoReais(calculateTotal())}
                            </Typography>
                        </div>
                        {calculateTotal() > 1000 && (
                            <Typography className={classes.freeShippingText}>
                                Parabéns, sua compra tem frete gratis !
                            </Typography>
                        )}
                    </div>
                    <div className={classes.buttonContainer}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth={true}
                            classes={{
                                root: classes.buttonRoot,
                                label: classes.buttonLabel
                            }}
                        >
                            Finalizar compra
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Home;
