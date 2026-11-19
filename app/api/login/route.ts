import { NextResponse } from "next/server";

// Stand-in for the demo PHP endpoint at `http://localhost:4000/sessions-create.php`
// (see public/server/sessions-create.php). No PHP runtime is required in preview;
// this mirrors the same admin/admin check and fixed demo JWT.
const DEMO_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJ1c2VyX2lkIjoxMjMsInVzZXJfbmFtZSI6ImFkbWluIiwidXNlcl9wYXNzd29yZCI6ImFkbWluIn0.gLP213Yn8njgq7qq8nqw_U-e93f70aBCipnwa0tY0g0";

function handle(req) {
    const { searchParams } = new URL(req.url);
    const userName = searchParams.get("user_name");
    const userPassword = searchParams.get("user_password");

    if (userName === "admin" && userPassword === "admin") {
        return NextResponse.json({
            data: { token: DEMO_TOKEN },
            message: "OK",
            code: 200
        }, { status: 200 });
    }

    return NextResponse.json({
        error: "Unauthorized",
        code: 401
    }, { status: 200 });
}

export async function GET(req) {
    return handle(req);
}

export async function POST(req) {
    return handle(req);
}
