// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export enum Role {
  USER,
  ADMIN,
  ROOT,
}

export type User = {
  id: number
  name: string
  email: string
  role: Role
  props: [Prop]
}

export type Prop = {
  id: number
  title: string
  slug: string
  desc: string
  published: boolean
  user: User
}


