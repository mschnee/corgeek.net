Chapter 3: Setting up the Corgeek.net OU and subaccounts in AWS
===============================================================

I logged into my original `matthew.engineer` management account on AWS and created the following:

- Corgeek.net OU
- Corgeek Operations (the operational account for corgeek.net, for ECR and S3 and state management)
- Corgeek Development (where we'll set up our development infrastructure)
- Corgeek Production (where we will deploy our production apps and services)

| Accounts | AccountID |
| -------- | --------- |
| OU | ou-bz93-bkwn85px |
| Operations | 153248837753 |
| Development | 150897302203 |
| Production | 455539942842 |