Chapter 5: User Configuration.
=============================

First attempt:

`aws configure sso`
Start: `https://corgeek.awsapps.com/start`
Region: `us-west-2`

"No AWS accounts are available to you".

The SAML response was missing the AWS Role attribute:
```xml
<Attribute Name="https://aws.amazon.com/SAML/Attributes/Role">
 <AttributeValue>arn:aws:iam::888725595603:role/CorgeekADSSO,arn:aws:iam::888725595603:saml-provider/CorgeekAD
 </AttributeValue>
<Attribute>
```

Given the EntraID is part of Microsoft 365 Basic, these attributes have been added directly to the SSO application mapping.

Restarted automatic provisioning in Azure- removed the users, waiting for reprovisioning, and then re-added.