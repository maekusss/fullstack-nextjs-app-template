import { NextResponse } from "next/server";
import { getAll, getById, create, update, remove } from "./_store";

function handle(req) {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type");
    const id = searchParams.get("id");

    if (!type) {
        return NextResponse.json({
            data: getAll(),
            message: "OK",
            code: 200
        }, { status: 200 });
    }

    if (type === "get") {
        const item = getById(id);
        if (!item) {
            return NextResponse.json({ error: "Unauthorized", code: 401 }, { status: 200 });
        }
        return NextResponse.json({ data: item, message: "OK", code: 200 }, { status: 200 });
    }

    if (type === "create") {
        create({
            email: searchParams.get("email"),
            name: searchParams.get("name"),
            avatar: searchParams.get("avatar")
        });
        return NextResponse.json({ code: 200, message: "Created successfully" }, { status: 200 });
    }

    if (type === "update") {
        const item = update(id, {
            email: searchParams.get("email"),
            name: searchParams.get("name"),
            avatar: searchParams.get("avatar")
        });
        if (!item) {
            return NextResponse.json({ error: "Unauthorized", code: 401 }, { status: 200 });
        }
        return NextResponse.json({ code: 200, message: "Updated successfully" }, { status: 200 });
    }

    if (type === "remove") {
        remove(id);
        return NextResponse.json({ code: 200, message: "Deleted successfully" }, { status: 200 });
    }

    return NextResponse.json({ error: "Unauthorized", code: 401 }, { status: 200 });
}

export async function GET(req) {
    return handle(req);
}

export async function POST(req) {
    return handle(req);
}

export async function DELETE(req) {
    return handle(req);
}
