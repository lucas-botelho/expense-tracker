import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/client'

interface Data {
    id: number;
    amount: number;
    description: string;
    dayDue: Date;
    categoryId: number;
    userId: string;
}



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
) {
    debugger;
    if (req.method === 'GET') {
        try {
            //get prisma to fetch the expenses from the database
            const expenses = await prisma.expense.findMany();
            console.log(expenses);
            return res.status(200).json(expenses);
        } catch (error) {
            return null;
        }
    }
}


