import styled from '@emotion/styled'
import { css } from 'emotion'
import Link from 'next/link'

const Img = styled.img`{
  display: block;
  width: 100%;
}`

const GridDiv = styled.div`{
  grid-column: span 1;
}`

const ThreeColumnGrid = (props) => (
  <div className={css`
    background-color: ${props.gridColor};
    margin: 0;
    padding: 0;
  `}>
    <div className={css`
      background-color: ${props.gridColor};
      margin: 0 auto;
      padding: 40px 0 20px;
      max-width: 1200px
    `}>
      <h2 className={css`
        background: #fff;
        box-shadow: 0 0 0 .625rem #fff,-.3125rem 0 0 .625rem #fff;
        color: ${props.textColor};
        display: inline;
        font-size: 21px;
        margin: 0 0 0 2rem;

        @media (min-width: 768px) {
          font-size: auto;
          margin: 0 0 0 .9rem;
        }
      `}>
        {props.gridTitle}
      </h2>
      <div className={css`
        background-color: #fff;
        display: grid;
        grid-template-columns: repeat(1,1fr);
        grid-gap: 1rem;
        margin: 40px 1rem 20px;
        padding: 1rem;

        @media (min-width: 768px) {
          grid-template-columns: repeat(3,1fr);
          font-size: 50px;
        }

        @media (min-width: 1200px) {
          margin: 40px 0 20px;
        }

        img{
          display: block;
        }
      `}>
        {props.gridItems.map(item => (
          <GridDiv key={`${item.label}-card`}>
            <Link href={`/${item.label}`}>
              <a>
                <Img srcSet={`static/crandal-release/${item.label}-card-640w.png,
                        static/crandal-release/${item.label}-card-640w.png 2x,
                        static/crandal-release/${item.label}-card-1242w.png 3x`}
                src={`static/crandal-release/${item.label}-card-640w.png`}
                alt={item.alt} />
              </a>
            </Link>
          </GridDiv>
        ))}
      </div>
    </div>
  </div>
)

export default ThreeColumnGrid;
