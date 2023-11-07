Chapter 1: Setup This Repository
================================

After completing this chapter, CD-ing into this repository will automatically set up the `nix` environment via `devenv`.

## Copied the `packages/nix/*` folders.  
These provide specific versions of utilities, such as `terraform` and `terragrunt`.

## Created the `.envrc`, `.gitignore`, `devenv.nix` and `devenv.yaml` files.
These set up the basic necessary information necessary for ensuring things work.

# Setup Nix and devenv:

There are slightly different instructions from the panfactum repo.

Using **WSL2** created manually (e.g. _not from the Microsoft Store_)
**Setup Nix**
```sh
sh <(curl -L https://nixos.org/nix/install) --no-daemon
```

**Setup devenv**
Specifically, this sets up devenv 1.0 (the Python rewrite) which is still a release-candidate.
```sh
nix-env -if https://install.devenv.sh/python-rewrite
```

