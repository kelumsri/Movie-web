
import { NextResponse } from "next/server";
import prismadb from "../../../../lib/prismadb";

export async function main(){
     try{
        console.log("connected");
        
        await prisma.$connect();
    }catch (err) { 
        return Error("Databace connection Unsuccessfull");
    }
};

export const GET = async (req:Request, res:NextResponse) =>{
    try{
        await main ();
        const Film = await prisma.film.findMany();
        return NextResponse.json({message:"Success", Film}, {status: 200});
    }catch (err){
        return NextResponse.json({message: "Error", err},{status:500});
    }finally {
        await prisma.$disconnect();
    }
}

export const POST = async (req: Request, res: NextResponse) =>{
    try{
        const{name,category,director,Castmember,image,summary}=await req.json();
        await main();
        const Film = await prismadb.film.create({data: {name,category,director,Castmember,image,summary,}});
        return NextResponse.json({message:"success", Film}, {status:500});
    }finally{
        await prisma.$disconnect();
    }
};
