// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";


interface RequestBody {
  name: string;
  email: string;
  mobileNumber: string;
  service: string;
  state: string;
  town: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
      try {
          const client = await clientPromise;
          const db = client.db('findam');

          const { name, email, mobileNumber, service, state, town }: RequestBody = req.body;

          const collection = db.collection('waitlist');
          const result = await collection.insertOne({ name, email, mobileNumber, service, state, town  });

          res.status(201).json({ message: 'Item added successfully', result });
      } catch (e: any) {
          console.error(e);
          res.status(500).json({ message: 'Error adding item', error: e.message });
      }
  } else {
      res.status(405).json({ message: 'Method not allowed' });
  }
}