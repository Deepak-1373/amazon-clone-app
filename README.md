## Preview

https://user-images.githubusercontent.com/61752151/169870452-5823e566-9a76-47b2-872d-d7bf4e3186bb.mp4


## Table of Contents

- [About](#about)
- [Technologies used](#technologies-used)
- [Features](#features)
- [Getting Started](#getting-started)
- [Screenshots](#screenshots)
- [Connect with me](#-connect-with-me)


## About
 - It is a Clone of Amazon E-commerce web app with full payment functionality as well.
   
## Technologies used
- ReactJS
- React Router
- Stripe
- Firebase

## Features
<ul>
  <li>Home page</li>
  <li>Sign in/Sign up page</li>
  <li>Cart Management page</li>
  <li>Checkout page</li>
  <li>Payment page</li>
  <li>Order Summary page</li>
</ul>

## Getting Started

- Clone the repository on your local machine with the command below in your terminal, and cd into the **amazon-clone** folder

```sh
https://github.com/Deepak-1373/amazon-clone-app.git

cd amazon-clone
```

- Install dependencies

```sh
npm install
```

- Generate a secret key by sign in/sign up into stripe payment `https://stripe.com/in`. Copy the secret key and paste it into the `functions/index.js` 

```
YOUR_STRIPE_SECRET_KEY = <Paste your secret key>
```
- You also need to start the backend server by opening a terminal having path `amazon-clone/functions` and then you need to run ```firebase emulators:start```.

- After that you can run your application in new terminal while the backend is running by entering `npm start` command in new terminal.

## Screenshots
![image](https://user-images.githubusercontent.com/61752151/169872462-0f8979bf-e47f-4de9-916d-8150fe4dc4f8.png)
![image](https://user-images.githubusercontent.com/61752151/169872540-c6d13def-a6c9-4b8e-9312-e7576fbf3457.png)
![image](https://user-images.githubusercontent.com/61752151/169872714-0a552157-1b87-470f-92e5-5c3f7488566d.png)
![screencapture-localhost-3000-payment-2022-05-23-22_43_08](https://user-images.githubusercontent.com/61752151/169872856-46a0d35c-1846-43ae-a7c2-db03b543f8b0.jpg)


## 👨‍💻 Connect with me 
<a href="https://twitter.com/dkamat001"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"/></a>
<a href="https://linkedin.com/in/deepak-1373"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/></a>





