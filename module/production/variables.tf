variable "production_subnets" {
  description = "Production subnets"
  type = string
}

variable "production_security_groups" {
  description = "value"
  type = string
}

variable "production_container_image" {
    description = "value"
    type = string
}

variable "container_port" {
  description = "value"
  type = number
}

variable "production_desired_task_count" {
    description = "value"
    type = number
  
}
