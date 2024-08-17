import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const user1 = await prisma.user.create({
    data: {
      name: 'ユーザー1',
      sex: '女',
      weight: 50,
      height: 160,
      WorkOutMenus: {
        create: [
          {
            menu: 'プランク',
            trainer_name: 'トレーナ1',
          },
          {
            menu: 'スクワット',
            trainer_name: 'トレーナ1',
          },
        ],
      },
    },
  });
  const user2 = await prisma.user.create({
    data: {
      name: 'ユーザー2',
      sex: '男',
      weight: 85,
      height: 178,
      WorkOutMenus: {
        create: {
          menu: 'プランク',
          trainer_name: 'トレーナ2',
        },
      },
    },
  });
  console.log({user1, user2})
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })