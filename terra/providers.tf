# main.tf
terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "5.80.0"
    }
  }
}

provider "aws" {
  region  = var.aws_region #The region where the environment 
  #is going to be deployed # Use your own region here
  access_key = "enter_access_key_here" # Enter AWS IAM 
  secret_key = "enter_secret_key_here" # Enter AWS IAM 
}