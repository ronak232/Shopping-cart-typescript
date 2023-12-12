// import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  IProduct,
  apiCallThunk,
} from "../store/redux/features/Productslice/ProductSlices";
import { addToCart } from "../store/redux/features/CartItemsSlice/CartItemSlice";
import { AppDispatch, RootState } from "../store/store";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { formatCurrency } from "../utilites/CurrencyFormatter";
import SkeletonCard from "../components/SkeletonLoader/SkeletonCard";
import { useEffect, useState } from "react";
import CustomMessage from "../utilites/AlertMessages";
import { Link } from "react-router-dom";

const Store = () => {
  const { products, loading } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  const [showMessage, setShowMessage] = useState(false);
  const [addedProduct, setAddedProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    try {
      if (products !== null) {
        setTimeout(() => {
          dispatch(apiCallThunk());
        }, 1000);
      }
    } catch {
      throw "API is Down...";
    }
  }, []);

  // Hide the page after few second whenever a product is added...
  const hideMessage = () => {
    setShowMessage(false);
  };

  const handleAddedItems = (product: IProduct): void => {
    dispatch(addToCart(product));
    setAddedProduct(product);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <>
      <Container>
        <Row className="mt-4">
          {!loading
            ? products?.map((items, index) => {
                return (
                  <Col md={4} className="product mb-2" key={index}>
                    <Card className="product__cardp p-2 h-100 shadow-md">
                      <Card.Img
                        className="product__img bg-cover h-full"
                        src={items.image}
                        alt=""
                        loading="lazy"
                      />
                      <Link to="/" className="product__title truncate py-2">{items.title}</Link>
                      <span>{formatCurrency(items.price)}</span>
                      <Button
                        className=""
                        aria-label="Cart-Btn"
                        onClick={() => handleAddedItems(items)}
                      >
                        Add to Cart
                      </Button>
                    </Card>
                  </Col>
                );
              })
            : Array.from({ length: 10 }, (_, i) => <SkeletonCard key={i} />)}
        </Row>
      </Container>
      <CustomMessage
        showMessage={showMessage}
        message={
          addedProduct
            ? `${addedProduct.title} has been added to your cart`
            : ""
        }
        hideMessage={hideMessage}
      />
    </>
  );
};

export default Store;
