import { auth } from "@clerk/nextjs/server";
import { prisma } from "./prisma";

export async function getCurrentUser() {
  const { userId } = await auth();
  
  if (!userId) {
    return null;
  }

  // Buscar ou criar usuário no banco local
  const user = await prisma.user.upsert({
    where: { clerkId: userId },
    update: {},
    create: {
      clerkId: userId,
      email: "", // Será atualizado abaixo
      firstName: "",
      lastName: "",
    },
  });

  return user;
}

export async function syncUserWithClerk() {
  const { userId } = await auth();
  
  if (!userId) {
    return null;
  }

  // Para obter dados completos do usuário, precisamos usar o currentUser
  // Por enquanto, vamos apenas garantir que o usuário existe no banco
  const user = await prisma.user.upsert({
    where: { clerkId: userId },
    update: {},
    create: {
      clerkId: userId,
      email: "",
      firstName: "",
      lastName: "",
    },
  });

  return user;
} 