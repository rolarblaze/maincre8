# ecr.tf
resource "aws_ecr_repository" "app_repository" {
  name                 = "${var.app_name}-${var.environment}"
  image_tag_mutability = "IMMUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }

  tags = {
    Name        = "${var.app_name}-${var.environment}-repository"
    Environment = var.environment
  }
}