# Namings
module "this" {
  source      = "cloudposse/label/null"
  version     = "0.25.0"
  namespace   = "goit-react"
  environment = "test-task"
  stage       = "prd"
}

resource "vercel_project" "this" {
  name      = module.this.id_full
  framework = "vite"

  git_repository = {
    type = "github"
    repo = var.github_repo_name
  }
}

resource "vercel_deployment" "this" {
  project_id = vercel_project.this.id
  ref        = "main"
  production = tobool(module.this.stage == "prd")
}
