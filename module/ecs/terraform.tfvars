region              = "us-west-2"

ecr_repository_name = "sellcrea8"

ecs_cluster_name = "sellcrea8-cluster"

desired_task_count = 3

task_family_name = "sellcrea8-task"

alb_name = "sellcrea8-alb"

service_name = "sellcrea8-service"

container_port = 3000

memory = 512

cpu = 3

domain_name = "www.sellcrea8.com"

subdomain = "test"

staging_subnets            = ["subnet-12345678", "subnet-87654321"]
staging_security_groups    = ["sg-12345678"]
staging_container_image    = "123456789012.dkr.ecr.us-west-2.amazonaws.com/my-app-staging:latest"
staging_desired_task_count = 1

production_subnets            = ["subnet-23456789", "subnet-98765432"]
production_security_groups    = ["sg-23456789"]
production_container_image    = "123456789012.dkr.ecr.us-west-2.amazonaws.com/my-app-production:latest"
production_desired_task_count = 3