import { config } from '@keystone-6/core'
import { lists } from './src/schema'
import type { TypeInfo } from '.keystone/types'
import dotenv from 'dotenv';

dotenv.config();

export default config<TypeInfo>({
  db: {
    provider: 'sqlite',
    url: process.env.DATABASE_URL || 'file:./cupboard.db',
    idField: { kind: 'autoincrement' },
  },
  lists,
})
