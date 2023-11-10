Chapter 4: Setting Up SSO and Access Control Roles
==================================================

Kubernetes supports Role-Based Access Control (rbac), and in addition we can describe roles and permissions for AWS resources using roles as well.

Before we set up SSO, we need to understand how team membership in Azure can map to named rbac roles:

Azure "roles" or Group memberships:
- Global Reader
- Security Reader
- Application Developer
- Global Administrator
- Security Administrator
- Application Administrator
- Conditional Access Administrator
- Groups Administrator
- User Administrator

And can be broken down into the following RBAC roles:
- engineer
- engineering_admin
- superuser

And finally, map them to environment access.  Each environment has three access roles: a `superuser` role, and `admin` role, and a `reader` role.
```json
    development = {
      superuser_groups = ["rbac_superusers", "rbac_engineering_admins", "rbac_engineers"]
      admin_groups     = ["rbac_superusers", "rbac_engineering_admins", "rbac_engineers"]
      reader_groups    = ["rbac_superusers", "rbac_engineering_admins", "rbac_engineers"]
    }
    production = {
      superuser_groups = ["rbac_superusers"]
      admin_groups     = ["rbac_superusers", "rbac_engineering_admins"]
      reader_groups    = ["rbac_superusers", "rbac_engineering_admins", "rbac_engineers"]
    }
    operations = {
      superuser_groups = ["rbac_superusers"]
      admin_groups     = ["rbac_superusers", "rbac_engineering_admins"]
      reader_groups    = ["rbac_superusers", "rbac_engineering_admins", "rbac_engineers"]
    }
```

There is technically also a "root" account, that we could account for as well, but the root account is associated with `matthew.engineer`, not `corgeek.net`