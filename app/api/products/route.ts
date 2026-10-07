import prisma from "@/lib/prisma";

export async function POST(request: Request) {
    const body = await request.json();
    
    const product = await prisma.products.create({
        data: {
            name: body.name,
            description: body.description,
            price: body.price,
            quantity: body.quantity,
        },
    });

    return Response.json(product, {
        status: 201,
    });
}

// API: GET
export async function GET() {
    const products = await prisma.products.findMany();
    return Response.json(products, {
        status: 200,
    });
}
