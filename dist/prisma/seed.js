"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt_1 = require("bcrypt");
const prisma = new client_1.PrismaClient();
async function main() {
    const hashedPw = (0, bcrypt_1.hashSync)(String(process.env.DEFAULT_TEMPORARY_PASSWORD), 10);
    await prisma.adminAccess.create({
        data: {
            email: String(process.env.DEFAULT_ADM_EMAIL),
            fullname: "Eliseu ADM",
            password: hashedPw,
        }
    });
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=seed.js.map