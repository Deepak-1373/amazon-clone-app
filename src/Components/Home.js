import React from 'react';
import './Home.css';
import Product from './Product.js';

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Banner of Amazon" />
			</div>

			<div className="home__row">
				<Product id='123456'
				 	title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
					price={29.99} 
					image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
					rating={5} 
					/>
				<Product id='654732'
					title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
					price={239.0}
					image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
					rating={4}
				 />
			</div>

			<div className="home__row">
				<Product 
					id="458698"
					title="Samsung LC49RG90SSUXEN 49' 4th Generation Gaming Sense with Sensors and Wrist Matched"
					price={199.99}
					rating={3}
					image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
				/>
				<Product 
					id="584796"
					title="Amazon Echo (3rd generation) | Smart Speaker with Alexa, Charcoal Fabric"
					price={98.990}
					rating={5}
					image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
				/>
				<Product 
					id="887499"
					title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128gb) - Silver (4th Generation)"
					price={569.99}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385.jpg"
				/>
			</div>

			<div className="home__row">
				<Product 
					id="90829332"
					title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
					price={1094.98}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
				/>
			</div>
		</div>
	)
};


export default Home