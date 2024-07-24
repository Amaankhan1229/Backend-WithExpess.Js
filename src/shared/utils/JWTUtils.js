import JWT from 'jsonwebtoken'

export const createJWTToken = (user)=>{
    const secret = "47638t1gi5942yhvfi3oh2b4ip5g95498943p"
   const token = JWT.sign(user,secret,{expiresIn:'1h'});
   console.log(token);
   return token;
}

// token  -> user authecate -> generate string -> developer -> verify 
// -> details about which use  in token 

export const verifyJWT=(accessToken)=>{
    JWT.verify()
}