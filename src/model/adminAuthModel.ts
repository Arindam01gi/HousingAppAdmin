export interface AdminAuthMain{
  loginResponse?: AdminLoginResponse;
}
export interface AdminLoginResponse {
  status: string
  code: number
  refresh: string
  access: string
  role: string
  user_id: number
  email: string
  username: string
  first_name: string
  last_name: string
  admin_profile_url: any
  apt_name: string
  apt_address: string
  city: string
  country: string
  state: string
  apt_unique_code: string
  pincode: string
  permissions: Permission[]
}
export interface Permission {
  access_control_name: string
  access_type: string
  action_items: string[]
}