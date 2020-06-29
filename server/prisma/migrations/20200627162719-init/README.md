# Migration `20200627162719-init`

This migration has been generated at 6/27/2020, 4:27:19 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE `dbnice`.`Todo` DROP COLUMN `update_at`,
ADD COLUMN `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ,
MODIFY `content` varchar(191) NOT NULL  ;

CREATE UNIQUE INDEX `Tag.value` ON `dbnice`.`Tag`(`value`)

CREATE UNIQUE INDEX `User.name` ON `dbnice`.`User`(`name`)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200626141425-init..20200627162719-init
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "mysql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -13,12 +13,12 @@
 model Todo {
   id Int @default(autoincrement()) @id
   title   String
-  content String?
+  content String
   created_at DateTime @default(now())
-  update_at  DateTime @default(now())
+  updated_at  DateTime @default(now())
   user   User @relation(fields: [userId], references: [id])
   userId Int
@@ -27,16 +27,16 @@
 }
 model Tag {
   id    Int    @default(autoincrement()) @id
-  value String
+  value String @unique
   label String
   todos Todo[]
 }
 model User {
   id   Int    @default(autoincrement()) @id
-  name String
+  name String @unique
   Todo Todo[]
 }
```


