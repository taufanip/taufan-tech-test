-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Employees" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "numberPhone" TEXT,
    "address" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Employees" ("address", "createdAt", "email", "firstName", "gender", "id", "lastName", "numberPhone", "updatedAt") SELECT "address", "createdAt", "email", "firstName", "gender", "id", "lastName", "numberPhone", "updatedAt" FROM "Employees";
DROP TABLE "Employees";
ALTER TABLE "new_Employees" RENAME TO "Employees";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
