import connectToDB from "../../../database";
import Account from "../../../models/Account";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function DELETE(req:any) {
    try {
        await connectToDB();
        const { searchParams } = new URL(req.url)
        const id = searchParams.get('id')
        if (!id) {
            return NextResponse.json({
                success: false,
                message: 'Account Id is Mandotory'
            })
        }
        const deleteAaccount = await Account.findByIdAndDelete(id);
        if (deleteAaccount) {
            return NextResponse.json({
                success: true,
                message: 'Account deleted Successfully'
            })
        }
        else {
            return NextResponse.json({
                success: false,
                message: 'Something went Wrong',
            })
        }
    }
    catch (e) {
        return NextResponse.json({
            success: false,
            message: "Something went wrong",
        });
    }
}
