# vocso_assignment 
# Project Title: Vocso_assignment

# Description: Simple authentiication flow using auth0 for login and signup after login signup verification of idToken at backend and a mail to user containing that token.

# Prerequisites: node with express, auth0 version 3, nextjs v15.2

# Frontend Setup:

# fontend is live at https://vocso-frontend.vercel.app/login ( on Vercel)
Instructions for setting up the Next.js frontend.
How to configure Auth0 for the frontend :
{
    AUTH0_SECRET='auth '
    AUTH0_BASE_URL='base-url-setup from auth0 dashboard'
    AUTH0_ISSUER_BASE_URL='issuer urlfrom auth0 dashboard'
    AUTH0_CLIENT_ID='your client id from auth0'
    AUTH0_CLIENT_SECRET=" secret key"
}
Steps to run the frontend locally (
    1. go to src/lib.api_service an comment the  live base url and use the localhost adress for baseUrl,
    2. run 'npm install' in terminal to installl necessary pacakges
    3. create a .env.local file in the root directory and then provide above mentioned auth0 configuration keys
    4. run npm dev 
).

# Backend Setup:
# backend is live at https://vocso-assignment.onrender.com/ ( on render)
Instructions for setting up the Node.js backend.
How to configure Auth0 in .env the backend (
    mongostring = "your mongo-uri"  (# we are not storing data for now but if not provided it will show error of database not connnected)
    port = 3001
    AUTH0_CLIENT_ID=your-client-id-here
    AUTH0_CLIENT_SECRET=your-client-secret-here
    AUTH0_DOMAIN=your-auth0-domain-here
    emailUser=your-email (# we are using nodemailer for with gmail service)
    emailPass=your pass (# two factor authentication password creted from google accound)
).
Steps to run the backend locally (
    1 run 'npm install' locally in your terminal
    2. create a .env file if not present and provide the above configuration in .env
    e start the server using 'npm start' in the terminal
).
Ensure that the /auth/callback endpoint is functioning as expected.
Deploying the Frontend: Explain how to deploy the frontend on Vercel/Netlify.
Deploying the Backend: Explain how to deploy the backend to Railway/Render/AWS Lightsail.
Bonus (Optional):
How to implement role-based authentication in Auth0.
Deployment instructions for both frontend and backend.