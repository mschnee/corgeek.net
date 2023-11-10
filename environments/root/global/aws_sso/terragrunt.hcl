include "shared" {
  path = find_in_parent_folders()
}

inputs = {
  environment_access_map = {
    development = {
      account_id       = "150897302203"
      superuser_groups = ["rbac_superusers", "rbac_engineering_admins", "rbac_engineers"]
      admin_groups     = ["rbac_superusers", "rbac_engineering_admins", "rbac_engineers"]
      reader_groups    = ["rbac_superusers", "rbac_engineering_admins", "rbac_engineers"]
    }
    production = {
      account_id       = "455539942842"
      superuser_groups = ["rbac_superusers"]
      admin_groups     = ["rbac_superusers", "rbac_engineering_admins"]
      reader_groups    = ["rbac_superusers", "rbac_engineering_admins", "rbac_engineers"]
    }
    root = {
      account_id       = "888725595603"
      superuser_groups = ["rbac_superusers"]
      admin_groups     = ["rbac_superusers"]
      reader_groups    = ["rbac_superusers"]
    }
    operations = {
      account_id       = "153248837753"
      superuser_groups = ["rbac_superusers"]
      admin_groups     = ["rbac_superusers", "rbac_engineering_admins"]
      reader_groups    = ["rbac_superusers", "rbac_engineering_admins", "rbac_engineers"]
    }
  }

  protected_s3_arns = [
    // terraform state buckets contain all the secrets for the environment
    "arn:aws:s3:::corgeek-tf-state-development",
    "arn:aws:s3:::corgeek-tf-state-production",
    "arn:aws:s3:::corgeek-tf-state-operations",
    "arn:aws:s3:::corgeek-tf-state-root",
  ]

  protected_kms_arns = [
    // sops keys

  ]

  protected_dynamodb_arns = [
    // terraform lock tables prevent state corruption
    "arn:aws:dynamodb:*:*:table/corgeek-tf-locks-*"
  ]
}
