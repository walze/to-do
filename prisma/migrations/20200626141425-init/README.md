# Migration `20200626141425-init`

This migration has been generated at 6/26/2020, 2:14:25 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `dbnice`.`Todo` (
`content` varchar(191)   ,`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ,`id` int NOT NULL  AUTO_INCREMENT,`title` varchar(191) NOT NULL  ,`update_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ,`userId` int NOT NULL ,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `dbnice`.`Tag` (
`id` int NOT NULL  AUTO_INCREMENT,`label` varchar(191) NOT NULL  ,`value` varchar(191) NOT NULL  ,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `dbnice`.`User` (
`id` int NOT NULL  AUTO_INCREMENT,`name` varchar(191) NOT NULL  ,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `dbnice`.`_TagToTodo` (
`A` int NOT NULL ,`B` int NOT NULL 
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE UNIQUE INDEX `_TagToTodo_AB_unique` ON `dbnice`.`_TagToTodo`(`A`,`B`)

CREATE  INDEX `_TagToTodo_B_index` ON `dbnice`.`_TagToTodo`(`B`)

ALTER TABLE `dbnice`.`Todo` ADD FOREIGN KEY (`userId`) REFERENCES `dbnice`.`User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `dbnice`.`_TagToTodo` ADD FOREIGN KEY (`A`) REFERENCES `dbnice`.`Tag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `dbnice`.`_TagToTodo` ADD FOREIGN KEY (`B`) REFERENCES `dbnice`.`Todo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200626141425-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,42 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "mysql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Todo {
+  id Int @default(autoincrement()) @id
+
+  title   String
+  content String?
+
+  created_at DateTime @default(now())
+  update_at  DateTime @default(now())
+
+  user   User @relation(fields: [userId], references: [id])
+  userId Int
+
+
+  tags Tag[]
+}
+
+model Tag {
+  id    Int    @default(autoincrement()) @id
+  value String
+  label String
+
+  todos Todo[]
+}
+
+model User {
+  id   Int    @default(autoincrement()) @id
+  name String
+
+  Todo Todo[]
+}
```


