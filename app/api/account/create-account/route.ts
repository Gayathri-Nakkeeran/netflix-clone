import connectToDB from "../../../database";
import Account from "../../../models/Account";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
type reqType = {
    json():{name:string , pin:number , uid:number} ;
   
}
export async function POST(req:string) {

    try {
        await connectToDB();
        const data = await JSON.parse(req);
        const name = await data["name"]
        const pin = await data["pin"]
        const uid = await data["uid"]
        const isAccountAlreadyExists = await Account.find({ uid, name });
        const allAccounts = await Account.find({});
        if (isAccountAlreadyExists && isAccountAlreadyExists.length > 0) {
            return NextResponse.json({
                success: false,
                message: "Please try with a different name",
            });
        }

        if (allAccounts && allAccounts.length === 4) {
            return NextResponse.json({
                success: false,
                message: "You can only add max 4 accounts",
            });
        }

        const hashPin = await hash(pin, 12);

        const newlyCreatedAccount = await Account.create({
            name,
            pin: hashPin,
            uid,
        });

        if (newlyCreatedAccount) {
            return NextResponse.json({
                success: true,
                message: "Account created successfully",
            });
        } else {
            return NextResponse.json({
                success: false,
                message: "Something Went wrong",
            });
        }


    } catch (e) {
        return NextResponse.json({
            success: false,
            message: "Something Went wrong",
        });
    }
}
