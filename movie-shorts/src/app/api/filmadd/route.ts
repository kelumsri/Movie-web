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

// export const GET = async (req, res) => {
//     try {
//       await main();
//       const films = await prismadb.film.findMany();
//       return NextResponse.json({ message: "success", films }, { status: 200 });
//     } finally {
//       await prismadb.$disconnect();
//     }
//   };