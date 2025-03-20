import jwt from 'jsonwebtoken';
import axios from 'axios';
import jwkToPem from 'jwk-to-pem';
import dotenv from 'dotenv';

dotenv.config();
const { AUTH0_DOMAIN, AUTH0_CLIENT_ID } = process.env;

async function getPublicKey(kid) {
  const jwksUrl = `${AUTH0_DOMAIN}/.well-known/jwks.json`;
  try {
    const { data } = await axios.get(jwksUrl);
    const key = data.keys.find(k => k.kid === kid);

    if (!key) {
      throw new Error('Public key not found for token');
    }
    return jwkToPem(key);
  } catch (error) {
    console.error('Error fetching JWKS: ', error);
    throw new Error('Failed to retrieve public keys from Auth0');
  }
}
export default async function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1] 

  if (!token) {
    return res.status(401).json({ message: 'Access token not found' });
  }

  try {
    const decodedToken = jwt.decode(token, { complete: true });

    if (!decodedToken || !decodedToken.header || !decodedToken.header.kid) {
      return res.status(400).json({ message: 'Invalid token format: Missing Key ID (kid)' });
    }

    // console.log('Decoded token: ', decodedToken);
    // console.log('Using key ID: ', decodedToken.header.kid);
    const publicKey = await getPublicKey(decodedToken.header.kid);

    jwt.verify(token, publicKey, {
      audience: AUTH0_CLIENT_ID, 
      issuer: `${AUTH0_DOMAIN}/`,
      algorithms: ['RS256'], 
    }, (err, user) => {
      if (err) {
        console.error('Token verification failed: ', err);
        return res.status(403).json({ message: 'Invalid access token' });
      }

      // req.decodedToken = user;
      req.verifyToken ={token,user}
      next();
    });
  } catch (err) {
    console.error('Error verifying token: ', err);
    return res.status(403).json({ message: 'Failed to verify token', error: err.message });
  }
}
