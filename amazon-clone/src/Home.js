import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/G/01/digital/video/sonata/US_SVOD_NonPrime_Banner/f69c4124-8751-4646-b8de-14e68f14ff8e._UR3000,600_SX1500_FMjpg_.jpg"
          alt="bg"
        />

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung lc49512445 curved LED Gaming Monitor"
            price={199.99}
            image={
              "https://m.media-amazon.com/images/I/81nyFiuFftL._AC_UY218_.jpg"
            }
            rating={3}
          />

          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) samrt speaker with alexa"
            price={59.99}
            image={
              "https://m.media-amazon.com/images/I/51hZ1Ix1bdL._AC_UY218_.jpg"
            }
            rating={4}
          />
          <Product
            id="3254354345"
            title="New Apple iPad pro, silver"
            price={349.99}
            image={
              "https://m.media-amazon.com/images/I/714poCrMlHL._AC_UY218_.jpg"
            }
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="The lean startup"
            price={29.99}
            image={
              "https://m.media-amazon.com/images/I/71kLrGElbOL._AC_UY654_FMwebp_QL65_.jpg"
            }
            rating={5}
          />
          <Product
            id="345781293"
            title="Magic Keyboard for 12.9-inch iPad Pro (4th Generation) - US English"
            price={329.99}
            image={
              "https://m.media-amazon.com/images/I/71vh06cKISL._AC_UY218_.jpg"
            }
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="254789311"
            title="OMOTON Ultra-Slim Bluetooth Keyboard Compatible with 2018 iPad Pro 11/12.9, New iPad 9.7 Inch, iPad Air, iPad Mini, iPhone and Other Bluetooth Enabled Devices, Grey"
            price={23.99}
            image={
              "https://m.media-amazon.com/images/I/711oVuaX+1L._AC_UY218_.jpg"
            }
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
