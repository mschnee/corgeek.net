Chapter 2: Setting up Azure
===========================

# Sign Up for Microsoft 365 Basic.

We chose Microsoft 365 over G Suite because we frequently use tools like OneNote and Sharepoint.

# Set up Cloudflare 
We created the `corgeek.net` site in Cloudflare, and configured the Namecheap account to use the Cloudflare Nameservers.

# Set up DNS in admin.microsoft.com
We set up the DNS for custom domains so that our emails e.g. `matthew.schnee@corgeek.net` would go to our Microsoft AAD accounts.

Additionally, we intend to use Roles in AAD to be the source of truth for RBAC in AWS down the line.

# Set up Azure Entra ID as the AWS Identity Provider
Most of the instructions are correct, but don't forget:
- Role
- RoleSessionName

Which are required by AWS.

# End
At this point, I have two accounts that can SSO login (but have no permissions or access to anything yet)