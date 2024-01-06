import { NextRequest, NextResponse } from "next/server";

export async function GET() {}

export async function POST(req: NextRequest, res: NextResponse) {
  const response = await fetch("http://localhost:8666/api/user/sigin", {
    method: "POST",
    body: JSON.stringify({
      name: "Dummy",
      aadhar_id: 985555874567,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });

  const resData = await response.json();
  return NextResponse.json({ success: false, message: "Logged in", data: {} });
}
