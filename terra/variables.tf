variable "aws_region" {
  description = "The AWS region to deploy resources"
  type        = string
  default     = "us-west-2"
}

variable "app_name" {
  description = "Name of the application"
  type        = string
  default     = "sellcrea8"
}

variable "environment" {
  description = "Deployment environment"
  type        = string
  default     = "production"
}

variable "container_port" {
  description = "Port exposed by the docker image"
  type        = number
  default     = 3000
}

variable "desired_count" {
  description = "Number of container instances to run"
  type        = number
  default     = 2
}