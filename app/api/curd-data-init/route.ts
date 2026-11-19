import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Stand-in for the demo PHP endpoint at `http://localhost:4000/curd-data-init.php`
// (see public/server/curd-data-init.php): serves the same bundled fixture directly.
function handle() {
    const file = path.join(process.cwd(), "public", "server-json", "curd-data-init.json");
    const data = JSON.parse(fs.readFileSync(file, "utf8"));
    return NextResponse.json(data, { status: 200 });
}

export async function GET() {
    return handle();
}

export async function POST() {
    return handle();
}
