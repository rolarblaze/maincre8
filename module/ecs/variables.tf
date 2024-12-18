variable "region" {
  type        = string
  description = ""
}

variable "ecr_repository_name" {
  type    = string
  description = "value"
}

variable "ecs_cluster_name" {
  type = string
  description = "value"
}

variable "task_family_name" {
  type = string
  description = "value"
}

variable "alb_name" {
  type = string
  description = "The load Balancer of the app"
}

variable "service_name" {
  type = string
  description = "value"
}

variable "desired_task_count" {
  type = number

}

variable "container_port" {
  type = string
  description = "The port number the application needs to run on"
}

variable "memory" {
  type = number
}

variable "cpu" {
  description = "The CPU of the application"
  type = number
}

variable "domain_name" {
  type = string
  description = "The custom domain name for the application"
  
}

variable "subdomain" {
  description = "The subdomain for the application"
  type = string
}

variable "staging_subnets" {
  
}

variable "staging_security_groups" {
  
}
variable "staging_container_image" {
  
}
variable "staging_desired_task_count" {
  
}
variable "production_subnets" {
  
}
variable "production_security_groups" {
  
}

variable "production_container_image" {
  
}

variable "production_desired_task_count" {
  
}