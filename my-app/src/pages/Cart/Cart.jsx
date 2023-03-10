import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from "styled-components";
import { useState } from "react";
import "./Cart.scss";
import slider from "../../components/slider";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar";
import { mobile } from "../../responsive";
import { Link } from 'react-router-dom';
import * as ROUTES from '../../Constants/Route';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: black;
    transform: scale(1.1);
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
      props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const quantity = styled.div`

  // align-items: center;
  // margin-bottom: 20px;
  // gap: 10px;
  // display: flex;
  // display: flex;
    align-items: center;
    gap: 10px;
`;

const button = styled.button`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    transition: all 0.5s ease;
&:hover {
  background-color: black;
  transform: scale(1.1);
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  // background-color: black;
  color: white;
  font-weight: 600;
  transition: all 0.5s ease;
  &:hover {
    background-color: black;
    transform: scale(1.1);
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
      props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`;

const Cart = () => {
  const mystyle = {
    margin: 30
  };

  const linkStyle = {
    textDecoration: "none",
    color: 'black'
  };
  // const [selectedImg, setSelectedImg] = useState(0);
  // const [quantity, setQuantity] = useState(1);

  return (
    <Container>
      <Navbar />
      <slider />
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopButton><Link to={ROUTES.HOME} variant="body2" style={linkStyle}>   CONTINUE SHOPPING </Link></TopButton>
          <TopTexts>
            {/* <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText> */}
          </TopTexts>
          <Link to={ROUTES.CHECKOUT} >
            <TopButton type="filled"><Link to={ROUTES.CHECKOUT} variant="body2" style={linkStyle}> CHECKOUT NOW</Link></TopButton>
          </Link>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                  <ProductSize>
                    <b>Quantity:</b> 3
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                {/* <ProductAmountContainer> */}
                {/* <AddIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon /> */}
                {/* <div className="quantity">
            <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}> - </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}> + </button>
            </div> */}
                {/* </ProductAmountContainer> */}
                <ProductPrice>$ 30</ProductPrice>
                {/* <Button>Remove</Button> */}
                <TopButton type="filled" style={mystyle}>Remove</TopButton>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                  <ProductSize>
                    <b>Quantity:</b> 3
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                {/* <ProductAmountContainer> */}
                {/* <div className="quantity">
            <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}> - </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div> */}
                {/* </ProductAmountContainer> */}
                <ProductPrice>$ 20</ProductPrice>
                {/* <Button>Remove</Button> */}
                <TopButton type="filled" style={mystyle}>Remove</TopButton>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button><Link to={ROUTES.CHECKOUT} variant="body2" style={linkStyle}> CHECKOUT NOW</Link></Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;