include "shared" {
  path = find_in_parent_folders()
}

inputs = {
  state_bucket = "corgeek-tf-state-root"
  lock_table   = "corgeek-tf-locks-root"
}
