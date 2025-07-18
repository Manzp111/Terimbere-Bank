import mysql, { createPool } from 'mysql2';
import dotenv from "dotenv";
dotenv.config();

const pool=mysql.createPool({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE

}).promise()

// pool.connect(function(error){
//     if(error) throw error;
//     console.log("connected");
// });


export async function getClient() {
    
    // const [data]=await pool.query("SELECT * FROM branch");
    try{
    const [client]=await pool.query("SELECT * FROM Client");
    //const []
    
    return client;
    }
    catch(error){
        console.log(error);
        
    }
}

export async function getClientDetail(id){
    const [client] = await pool.query(`SELECT * FROM client where clientNo=? `,[id]);
    return client[0];
   

}
// const result=await getClient('CR56');
// console.log(result);

export async function createClient(clientNo,fName,Iname,telNo,prefType,maxRent,Email){
    const [resul]=await pool.query(
        `INSERT INTO CLIENT 
        (clientNo,fName,Iname,telNo,prefType,maxRent,Email) 
        VALUES (?,?,?,?,?,?,?)
        `,
        [clientNo,fName,Iname,telNo,prefType,maxRent,Email]
    )
 return getClientDetail(clientNo)
}
// const resul=await createClient("TRE702",'manzi','gilbert','07888','dr','5000','gil@gmail.com');
// console.log(resul);


