export interface AdminMain{
    notices?: Notice[]
}
export interface Notice{
    notice_id: number
    notice_title: string
    notice_desc: string
    priority: number
    created_on: string
    created_by: number
    updated_on: string
    updated_by: number
}