import { NextResponse } from "next/server";
import { main } from "../route";
import prisma from "../../../../../prisma";

export const GET = async ( req: Request, res: NextResponse) => {
    try{
        const id = parseInt(req.url.split("/filmadd/")[1]);
        // const id = req.url.split("/filmadd/")[1];
        console.log(id);
        
        await main();
        const Film = await prisma.film.findFirst({where:{id}});
        if(!Film)
            return NextResponse.json({message: "Not Found"},{status: 404});
            return NextResponse.json({message: "Success", Film},{status: 200});
    }catch(error){
        return NextResponse.json({message: "Error",error},{status: 500});
    }finally {
    await prisma.$disconnect();
    }
}; 