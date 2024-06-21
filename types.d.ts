interface QueueInfo {
  id: number
  name: string
  category_id: number
}

interface CounterQueueInfo {
  id: number
  counter_number: number
  queue_name: string
}
type QueueStatus = 'serve' | 'wait' | 'skip' | 'done'

interface Attendee {
  business_token: string
  created_at: string
  id: number
  name: string
  pin: string
  updated_at: string
}
interface Category {
  acronym: string
  business_token: string
  created_at: string
  id: number
  name: string
  status: boolean
  updated_at: string
}

interface CategoryInfo {
  acronym: string
  id: number
  name: string
  status: boolean
  counter: string[]
}

interface Counter {
  access_code: string
  attendee_id: number
  business_token: string
  counter_number: string
  created_at: string
  id: number
  main_category_id: number
  secondary_category_id: number
  status: boolean
  updated_at: string
}

interface CounterInfo {
  counter_number: string
  access_code: string
  main_category_name: string
  secondary_category_name: string
  attendee_name: string
}
