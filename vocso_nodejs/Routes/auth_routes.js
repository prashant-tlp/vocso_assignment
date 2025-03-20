import express from 'express';
import { adminAuthController } from '../Controller/authcontroller.js';
import verifyToken from '../config/authVerification.js';
import { auth } from 'express-oauth2-jwt-bearer';


const checkJwt = auth({
    audience: 'http://localhost:3001/', 
    issuerBaseURL: 'https://dev-itvmwpj0hl4isd2x.us.auth0.com/',
    tokenSigningAlg: 'RS256', 
});

const router = express.Router();

router.post('/callback',verifyToken,adminAuthController)
export default router