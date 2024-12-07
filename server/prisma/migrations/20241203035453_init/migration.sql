/*
  Warnings:

  - You are about to drop the column `amount` on the `Expenses` table. All the data in the column will be lost.
  - You are about to drop the column `uniCost` on the `Purchases` table. All the data in the column will be lost.
  - You are about to drop the column `changePercent` on the `SalesSummary` table. All the data in the column will be lost.
  - You are about to drop the `ExpensesSummary` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PurchasesSummary` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `amount` to the `Expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unitCost` to the `Purchases` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ExpenseByCategory" DROP CONSTRAINT "ExpenseByCategory_expenseSummaryId_fkey";

-- AlterTable
ALTER TABLE "Expenses" DROP COLUMN "amount",
ADD COLUMN     "amount" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Purchases" DROP COLUMN "unitCost",
ADD COLUMN     "unitCost" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "SalesSummary" DROP COLUMN "changePercentage",
ADD COLUMN     "changePercentage" DOUBLE PRECISION;

-- DropTable
DROP TABLE "ExpenseSummary";

-- DropTable
DROP TABLE "PurchaseSummary";

-- CreateTable
CREATE TABLE "PurchaseSummary" (
    "purchaseSummaryId" TEXT NOT NULL,
    "totalPurchased" DOUBLE PRECISION NOT NULL,
    "changePercentage" DOUBLE PRECISION,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PurchaseSummary_pkey" PRIMARY KEY ("purchaseSummaryId")
);

-- CreateTable
CREATE TABLE "ExpenseSummary" (
    "expenseSummaryId" TEXT NOT NULL,
    "totalExpenses" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExpenseSummary_pkey" PRIMARY KEY ("expenseSummaryId")
);

-- AddForeignKey
ALTER TABLE "ExpenseByCategory" ADD CONSTRAINT "ExpenseByCategory_expenseSummaryId_fkey" FOREIGN KEY ("expenseSummaryId") REFERENCES "ExpenseSummary"("expenseSummaryId") ON DELETE RESTRICT ON UPDATE CASCADE;
