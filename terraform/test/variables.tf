variable "aws_region" {
  default = "us-west-2"
}

variable "ecr_repository_name" {
  default = "sellcrea8"
}

variable "ecs_cluster_name" {
  default = "sellcrea8-cluster"
}

variable "task_family_name" {
  default = "sellcrea8-task"
}

variable "alb_name" {
  default = "sellcrea8-alb"
}

variable "service_name" {
  default = "sellcrea8-service"
}

variable "desired_task_count" {
  default = 3
}

variable "container_port" {
  default = 3000
}

variable "memory" {
  default = 512
}

variable "cpu" {
  default = 256
}

variable "domain_name" {
  description = "The custom domain name for the application"
  default     = "www.sellcrea8.com"
}

variable "subdomain" {
  description = "The subdomain for the application"
  default     = "test"
}
