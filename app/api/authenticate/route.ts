import { NextResponse } from "next/server";

// Stand-in for the demo PHP endpoint at `http://localhost:4000/authenticate.php`
// (see public/server/authenticate.php). Decodes the JWT payload segment the same
// way the PHP file does, with no PHP runtime required in preview.
function decodeToken(token) {
    try {
        const payloadSegment = token.split(".")[1];
        const json = Buffer.from(payloadSegment, "base64url").toString("utf8");
        return JSON.parse(json);
    } catch {
        return null;
    }
}

function getBearerToken(req) {
    const authHeader = req.headers.get("authorization");
    if (!authHeader) return null;
    const match = authHeader.match(/Bearer\s(\S+)/);
    return match ? match[1] : null;
}

function handle(req) {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token") || getBearerToken(req) || "";
    const payload = token ? decodeToken(token) : null;

    if (payload && payload.user_name === "admin" && payload.user_password === "admin") {
        return NextResponse.json({
            data: { user_id: payload.user_id, name: payload.user_name },
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
