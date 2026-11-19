import fs from "fs";
import path from "path";

// In-memory backing store for the CRUD demo, seeded from the bundled fixture.
// Stands in for the demo PHP endpoint at `http://localhost:4000/curd.php`
// (see public/server/curd.php), which otherwise requires a PHP runtime.
let items: any[] | null = null;

function load(): any[] {
    if (!items) {
        const file = path.join(process.cwd(), "public", "server-json", "curd.json");
        const parsed = JSON.parse(fs.readFileSync(file, "utf8"));
        items = parsed.data;
    }
    return items as any[];
}

export function getAll() {
    return load();
}

export function getById(id) {
    return load().find((item) => String(item.id) === String(id));
}

export function create({ email, name, avatar }) {
    const list = load();
    const newItem = {
        id: Math.floor(Math.random() * (9999 - 6 + 1)) + 6,
        email: email || "newuser@gmail.com",
        name: name || "newName",
        avatar: avatar || list[0]?.avatar || ""
    };
    list.unshift(newItem);
    return newItem;
}

export function update(id, { email, name, avatar }) {
    const list = load();
    const item = list.find((entry) => String(entry.id) === String(id));
    if (!item) return null;

    item.email = email || item.email;
    item.name = name || item.name;
    item.avatar = avatar || item.avatar;
    return item;
}

export function remove(id) {
    const list = load();
    const index = list.findIndex((entry) => String(entry.id) === String(id));
    if (index === -1) return false;
    list.splice(index, 1);
    return true;
}
