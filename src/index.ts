import express from "express";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';


async function init (){
    const app = express();
    const PORT  =Number(process.env.port) || 8000;
    
    
    // Create graphql server
    
    const gqlServer = new ApolloServer({
        typeDefs:`
        type Query {
              
        }
        `,
        resolvers:{}
    })
    
    // start the gql server
    
    await  gqlServer.start()
    
    app.use('/',(req,res)=>{
      res.json({message:"server is up and run"})
    })
    
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`)
    })
}

init();

