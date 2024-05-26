// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";


interface RequestBody {
  name: string;
  email: string;
  mobileNumber: string;
  company: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
      try {
          const client = await clientPromise;
          const db = client.db('sabi');

          const { name, email, mobileNumber, company  }: RequestBody = req.body;

          const collection = db.collection('waitlist');
          const result = await collection.insertOne({ name, email, mobileNumber, company  });

          res.status(201).json({ message: 'Item added successfully', result });
      } catch (e: any) {
          console.error(e);
          res.status(500).json({ message: 'Error adding item', error: e.message });
      }
  } else {
      res.status(405).json({ message: 'Method not allowed' });
  }
}