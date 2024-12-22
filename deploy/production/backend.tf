terraform {
  backend "s3" {
    bucket         = "my-terraform-state-bucket"
    key            = "terraform/state/production.tfstate"
    region         = var.region
    encrypt        = true
    dynamodb_table = "terraform-state-lock"
  }
}