import { useDispatch, useSelector } from "react-redux";
import {
  IProduct,
  apiCallThunk,
} from "../store/redux/features/Productslice/ProductSlices";
import { addToCart } from "../store/redux/features/CartItemsSlice/CartItemSlice";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../store/store";
import { Button, Card, Col, Row } from "react-bootstrap";
import "../styles/store.scss";
import { formatCurrency } from "../utilites/CurrencyFormatter";
import { ThunkAction } from "@reduxjs/toolkit";

export const Store = () => {
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch: AppDispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (products !== null) {
      setTimeout(() => {
        dispatch(apiCallThunk());
      }, 2000);
    }
  }, []);

  const handleAddedItems = (product: IProduct): void => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <Row className="container m-auto">
        {products?.map((items, index) => {
          return (
            <Col md={4} className="product p-2" key={index}>
              <Card className="product__card p-2">
                <Card.Img
                  className="product__img card-img-top"
                  src={items.image}
                  alt=""
                />
                <h4 className="product__title">{items.title}</h4>
                <span>{formatCurrency(items.price)}</span>
                <Button className="" onClick={() => handleAddedItems(items)}>
                  Add to Cart
                </Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};
