# cfn-static-website-with-edge-lambda

Static website hosted from an S3 Bucket delivered via Cloudfront with Edge Lambda.

## Status

|Branch|Domain                               |Status                        |
|------|-------------------------------------|------------------------------|
|master|lambdaedge.examples.jamesmoriarty.xyz|[![master build status][1]][2]|

## Routes

> /edgelambda

Returns handler `event` as json.

## Deploy

```
STACK_NAME=examples-lambdaedge \
WEBSITE_CERT_ARN=arn:aws:acm:us-east-1:467230181896:certificate/d61d229a-b07a-484c-bc9a-dce0fc6bfe2a \
WEBSITE_HOSTED_ZONE=jamesmoriarty.xyz \
WEBSITE_DOMAIN=lambdaedge.examples.jamesmoriarty.xyz \
    bin/deploy
```

[1]: https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiSUVLT3pLMHYvRVFFSHRmM21sd0ZNczRoOXdEejBsMTQ5eUwrYmh5N0hMczNsL0QxOFhtWmFKdytrVEltcDcrZERCN0Z0VWVlNjU4c09pbUhqU2NkckVrPSIsIml2UGFyYW1ldGVyU3BlYyI6ImhMU3pnQWRVMzNobWt3MXgiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master
[2]: https://console.aws.amazon.com/codesuite/codebuild/projects/examples-edgelambda/history
