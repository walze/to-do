# Migration `20200629204532-init`

This migration has been generated at 6/29/2020, 8:45:32 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200627162719-init..20200629204532-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,10 +1,10 @@
 // This is your Prisma schema file,
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
-  provider = "mysql"
-  url = "***"
+  provider = "postgres"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -16,9 +16,9 @@
   title   String
   content String
   created_at DateTime @default(now())
-  updated_at  DateTime @default(now())
+  updated_at DateTime @default(now())
   user   User @relation(fields: [userId], references: [id])
   userId Int
```


