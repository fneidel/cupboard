import { config } from '@keystone-6/core'
import { lists } from './schema'
import type { TypeInfo } from '.keystone/types'
import dotenv from 'dotenv';

dotenv.config();

export default config<TypeInfo>({
  db: {
    provider: 'sqlite',
    url: process.env.DATABASE_URL || 'file:./keystone-example.db',
  },
  lists,
  storage: {
    img_local: {
      kind: "local",
      type: "image",
      storagePath: "public/images",

      generateUrl: (path) =>
        `http://localhost:3000/images${path}`,

      serverRoute: {
        path: "/images",
      },
    }
  }
})
