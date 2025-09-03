output "vercel_project_name" {
  value = vercel_project.this.name
}

output "vercel_deployment_url" {
  value = vercel_deployment.this.url
}

output "vercel_deployment_domains" {
  value = vercel_deployment.this.domains
}
