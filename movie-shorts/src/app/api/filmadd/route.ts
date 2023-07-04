// import { NextResponse } from "next/server";
// import {auth} from "@clerk/nextjs";
// import { create } from "domain";
// import prismadb from "../../../../lib/prismadb";

// export async function POST(req: Request) {
// try { 
//     const {userId} = auth();
//     const body = await req.json();

//     const { film_name,director_name,category,cast_members,summery} = body;

//     if (!userId) {
//         return new NextResponse("Unauthorizeed", {status: 401});
//     }

//     if (!film_name){
//         return new NextResponse ("Name is requerd", {status: 4000});
//     }

//     const Film = await prismadb.film.create({
//         data:{
//             film_name,
//             director_name,
//             category,
//             cast_members,
//             summery

//         }
//     });

//     return NextResponse.json(Film); 

// } catch (error){
//     console.log ('[FILM_POST]', error);
//     return new NextResponse("Internal error", {status: 500});
// }
// }

import { NextResponse } from "next/server";
import prismadb from "../../../../lib/prismadb";

async function main(){
     try{
        await prisma.$connect();
    }catch (err) {
        return Error("Databace connection Unsuccessfull");
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