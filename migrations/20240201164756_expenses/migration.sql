/*
  Warnings:

  - Made the column `value` on table `Expense` required. This step will fail if there are existing NULL values in that column.
  - Made the column `value` on table `Income` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Expense" ADD COLUMN     "date" TIMESTAMP(3),
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "value" SET NOT NULL;

-- AlterTable
ALTER TABLE "Income" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "value" SET NOT NULL;
