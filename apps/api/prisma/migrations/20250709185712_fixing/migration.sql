-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserAdmin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "password" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_UserAdmin" ("createdAt", "dateOfBirth", "email", "firstName", "gender", "id", "lastName", "password", "updatedAt") SELECT "createdAt", "dateOfBirth", "email", "firstName", "gender", "id", "lastName", "password", "updatedAt" FROM "UserAdmin";
DROP TABLE "UserAdmin";
ALTER TABLE "new_UserAdmin" RENAME TO "UserAdmin";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
