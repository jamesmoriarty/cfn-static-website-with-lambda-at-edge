# cfn-static-website-with-edge-lambda

Static website hosted from an S3 Bucket delivered via Cloudfront with Edge Lambda.

## Status

|Branch |Domain           |Status                         |
|-------|-----------------|-------------------------------|
|master |jamesmoriarty.xyz|[![master build status][1]][2] |

## Deploy

```
STACK_NAME=jamesmoriartyxyz \
WEBSITE_CERT_ARN=arn:aws:acm:us-east-1:467230181896:certificate/0c8c0f85-f68d-4063-abf2-3462a6a8a714 \
WEBSITE_HOSTED_ZONE=jamesmoriarty.xyz \
WEBSITE_DOMAIN=jamesmoriarty.xyz \
    bin/deploy
```

[1]: https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoieFZ4TG1JeHVtNVM1ZVlJVmRQbFlSSHduRzJ2ZCtBaHBTWVFlako0STFVbUFlckNRZ2RBYTVWa2pVVkVkVUNRVTB3NU4zRkpFcGpTdGI5YVlMWGJTQVJnPSIsIml2UGFyYW1ldGVyU3BlYyI6IlB3MEMvc0NrTUtQTWhOM2siLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master
[2]: https://console.aws.amazon.com/codesuite/codebuild/projects/jamesmoriarty/history?region=us-east-1
