variable "region" {
  description = "deployment region"
  type        = string
}
variable "ecs_repository_name" {
  description = "ECS registry name"
}
variable "ecs_cluster_name" {
  description = "ECS Cluster name"
  type        = string
}

variable "aws_ecs_task_definition" {
  description = "value"
  type        = string
}

variable "aws_iam_role" {
  type = string
}

variable "aws_ecs_service" {
  description = "value"
  type        = string
}

variable "container_port" {
  type = number
}

variable "domain_name" {
  type = string
}


