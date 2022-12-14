import { Module } from "@nestjs/common";
import { NotificationsRepository } from "src/application/repositories/notifications-repository";
import { PrismaService } from "./prisma.service";
import { prismaNotificationsRepository } from "./repositories/prisma-notifications-repository";

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: prismaNotificationsRepository,
    }
  ],
  exports: [
    NotificationsRepository,
  ]
})
export class DatabaseModule {}