import React from "react"
import Img from "gatsby-image"
import colors from "./colors"
import styled from "@emotion/styled"

class ProductHero extends React.Component {
  render() {
    const {
      title,
      hero_image,
      hero_image_background,
      statement_of_id,
      average_overall_rating,
      review_count,
    } = this.props.product

    const HeroContainer = styled.div`
      display: flex;
      flex-direction: column;
      @media (min-width: 480px) {
        flex-direction: row;
        justify-content: space-around;
        background: url(${hero_image_background.publicURL});
        background-position: bottom center;
        background-repeat: repeat-y;
        background-size: cover;
      }
    `

    const ImageContainer = styled.div`
      @media (min-width: 480px) {
        order: 2;
        width: 50%;
      }
    `

    const StyledProductInfoContainer = styled.div`
      background: white;
      text-align: center;
      @media (min-width: 480px) {
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        width: 30%;
        margin: 5% 5%;
        border-radius: 5px;
        padding: 1%;
        height: 100%;
      }
    `

    const ProductHero = () => (
      <HeroContainer>
        <ImageContainer>
          <Img fluid={hero_image.childImageSharp.fluid} />
        </ImageContainer>
        <StyledProductInfoContainer>
          <p>
            <span>{average_overall_rating} Stars</span>{" "}
            <span css={{ color: colors.secondary }}>
              {review_count} Reviews
            </span>
          </p>
          <h2>{title}</h2>
          <p>{statement_of_id}</p>
        </StyledProductInfoContainer>
      </HeroContainer>
    )

    return (
      <div>
        <ProductHero />
      </div>
    )
  }
}

export default ProductHero
