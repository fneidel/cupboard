-- CreateTable
CREATE TABLE "Brand" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL DEFAULT ''
);

-- CreateTable
CREATE TABLE "Source" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL DEFAULT ''
);

INSERT INTO "Brand" ("id", "name") VALUES (1, 'UNKNOWN');
INSERT INTO "Source" ("id", "name") VALUES (1, 'UNKNOWN');

-- CreateTable
CREATE TABLE "Clothing" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL DEFAULT '',
    "brand_id" INTEGER NOT NULL DEFAULT 1,
    "source_id" INTEGER NOT NULL DEFAULT 1,
    "notes" TEXT,
    "image_path" TEXT,
    "material" TEXT NOT NULL DEFAULT 'UNKNOWN',
    "requires_maintenance" BOOLEAN NOT NULL DEFAULT false,
    "sub_type" TEXT NOT NULL DEFAULT 'T_SHIRT',
    "size" TEXT NOT NULL DEFAULT 'ONE_SIZE',
    "fit" TEXT NOT NULL DEFAULT 'REGULAR',
    "warmth_level" TEXT NOT NULL DEFAULT 'NORMAL',
    "original_size" TEXT,
    "usage_context" TEXT,
    CONSTRAINT "Clothing_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "Brand" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Clothing_source_id_fkey" FOREIGN KEY ("source_id") REFERENCES "Source" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Footwear" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL DEFAULT '',
    "brand_id" INTEGER NOT NULL DEFAULT 1,
    "source_id" INTEGER NOT NULL DEFAULT 1,
    "notes" TEXT,
    "image_path" TEXT,
    "material" TEXT NOT NULL DEFAULT 'UNKNOWN',
    "requires_maintenance" BOOLEAN NOT NULL DEFAULT false,
    "sub_type" TEXT NOT NULL DEFAULT 'SNEAKERS',
    "size" TEXT NOT NULL DEFAULT 'ONE_SIZE',
    "fit" TEXT NOT NULL DEFAULT 'REGULAR',
    "warmth_level" TEXT NOT NULL DEFAULT 'NORMAL',
    "is_slip_resistant" BOOLEAN NOT NULL DEFAULT false,
    "original_size" TEXT,
    CONSTRAINT "Footwear_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "Brand" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Footwear_source_id_fkey" FOREIGN KEY ("source_id") REFERENCES "Source" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Hosiery" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL DEFAULT '',
    "brand_id" INTEGER NOT NULL DEFAULT 1,
    "source_id" INTEGER NOT NULL DEFAULT 1,
    "notes" TEXT,
    "image_path" TEXT,
    "material" TEXT NOT NULL DEFAULT 'UNKNOWN',
    "requires_maintenance" BOOLEAN NOT NULL DEFAULT false,
    "sub_type" TEXT NOT NULL DEFAULT 'SOCKS',
    "size" TEXT NOT NULL DEFAULT 'ONE_SIZE',
    "warmth_level" TEXT NOT NULL DEFAULT 'NORMAL',
    "original_size" TEXT,
    CONSTRAINT "Hosiery_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "Brand" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Hosiery_source_id_fkey" FOREIGN KEY ("source_id") REFERENCES "Source" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Jewelry" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL DEFAULT '',
    "brand_id" INTEGER NOT NULL DEFAULT 1,
    "source_id" INTEGER NOT NULL DEFAULT 1,
    "notes" TEXT,
    "image_path" TEXT,
    "material" TEXT NOT NULL DEFAULT 'UNKNOWN',
    "requires_maintenance" BOOLEAN NOT NULL DEFAULT false,
    "sub_type" TEXT NOT NULL DEFAULT 'EARRINGS',
    "length_cm" REAL,
    CONSTRAINT "Jewelry_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "Brand" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Jewelry_source_id_fkey" FOREIGN KEY ("source_id") REFERENCES "Source" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Bag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL DEFAULT '',
    "brand_id" INTEGER NOT NULL DEFAULT 1,
    "source_id" INTEGER NOT NULL DEFAULT 1,
    "notes" TEXT,
    "image_path" TEXT,
    "material" TEXT NOT NULL DEFAULT 'UNKNOWN',
    "requires_maintenance" BOOLEAN NOT NULL DEFAULT false,
    "sub_type" TEXT NOT NULL DEFAULT 'HANDBAG',
    CONSTRAINT "Bag_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "Brand" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bag_source_id_fkey" FOREIGN KEY ("source_id") REFERENCES "Source" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Accessory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL DEFAULT '',
    "brand_id" INTEGER NOT NULL DEFAULT 1,
    "source_id" INTEGER NOT NULL DEFAULT 1,
    "notes" TEXT,
    "image_path" TEXT,
    "material" TEXT NOT NULL DEFAULT 'UNKNOWN',
    "requires_maintenance" BOOLEAN NOT NULL DEFAULT false,
    "sub_type" TEXT NOT NULL DEFAULT 'BELT',
    "warmth_level" TEXT,
    "original_size" TEXT,
    CONSTRAINT "Accessory_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "Brand" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Accessory_source_id_fkey" FOREIGN KEY ("source_id") REFERENCES "Source" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Headwear" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL DEFAULT '',
    "brand_id" INTEGER NOT NULL DEFAULT 1,
    "source_id" INTEGER NOT NULL DEFAULT 1,
    "notes" TEXT,
    "image_path" TEXT,
    "material" TEXT NOT NULL DEFAULT 'UNKNOWN',
    "requires_maintenance" BOOLEAN NOT NULL DEFAULT false,
    "sub_type" TEXT NOT NULL DEFAULT 'BEANIE',
    "size" TEXT NOT NULL DEFAULT 'ONE_SIZE',
    "fit" TEXT NOT NULL DEFAULT 'REGULAR',
    "warmth_level" TEXT NOT NULL DEFAULT 'NORMAL',
    "original_size" TEXT,
    CONSTRAINT "Headwear_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "Brand" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Headwear_source_id_fkey" FOREIGN KEY ("source_id") REFERENCES "Source" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Brand_name_key" ON "Brand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Source_name_key" ON "Source"("name");

-- CreateIndex
CREATE INDEX "Clothing_brand_id_idx" ON "Clothing"("brand_id");

-- CreateIndex
CREATE INDEX "Clothing_source_id_idx" ON "Clothing"("source_id");

-- CreateIndex
CREATE INDEX "Footwear_brand_id_idx" ON "Footwear"("brand_id");

-- CreateIndex
CREATE INDEX "Footwear_source_id_idx" ON "Footwear"("source_id");

-- CreateIndex
CREATE INDEX "Hosiery_brand_id_idx" ON "Hosiery"("brand_id");

-- CreateIndex
CREATE INDEX "Hosiery_source_id_idx" ON "Hosiery"("source_id");

-- CreateIndex
CREATE INDEX "Jewelry_brand_id_idx" ON "Jewelry"("brand_id");

-- CreateIndex
CREATE INDEX "Jewelry_source_id_idx" ON "Jewelry"("source_id");

-- CreateIndex
CREATE INDEX "Bag_brand_id_idx" ON "Bag"("brand_id");

-- CreateIndex
CREATE INDEX "Bag_source_id_idx" ON "Bag"("source_id");

-- CreateIndex
CREATE INDEX "Accessory_brand_id_idx" ON "Accessory"("brand_id");

-- CreateIndex
CREATE INDEX "Accessory_source_id_idx" ON "Accessory"("source_id");

-- CreateIndex
CREATE INDEX "Headwear_brand_id_idx" ON "Headwear"("brand_id");

-- CreateIndex
CREATE INDEX "Headwear_source_id_idx" ON "Headwear"("source_id");
