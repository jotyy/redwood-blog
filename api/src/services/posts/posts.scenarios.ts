import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: { data: { title: 'String2113512', body: 'String', tags: 'String' } },
    two: { data: { title: 'String3240922', body: 'String', tags: 'String' } },
  },
})

export type StandardScenario = typeof standard
