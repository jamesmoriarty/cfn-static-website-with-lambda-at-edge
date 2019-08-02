# cfn-static-website-with-edge-lambda

Static website hosted from an S3 Bucket delivered via Cloudfront with Lambda@Edge.

## Status

|Branch|Domain                                        |Status                        |
|------|----------------------------------------------|------------------------------|
|master|[lambda-at-edge.examples.jamesmoriarty.xyz][1]|[![master build status][2]][3]|

## Routes

> /

Returns index.html.

## Query

> debug

Returns `viewer-request` object as json.

## Deploy

```
STACK_NAME=examples-lambda-at-edge \
WEBSITE_CERT_ARN=arn:aws:acm:us-east-1:467230181896:certificate/d61d229a-b07a-484c-bc9a-dce0fc6bfe2a \
WEBSITE_HOSTED_ZONE=jamesmoriarty.xyz \
WEBSITE_DOMAIN=lambda-at-edge.examples.jamesmoriarty.xyz \
    bin/deploy
```

[1]: https://lambda-at-edge.examples.jamesmoriarty.xyz
[2]: https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiVVpCbUxSS3JuT3ZhTzdHM1Bpb3N6aDdJMFpOMTZzQXpxSkJZbUpaTUtQRXRTeVFHak1nZEFFTHZ0a291dHBrQUlWOEV4Ymc3VmM5ZDNYamdzV0pMWFhrPSIsIml2UGFyYW1ldGVyU3BlYyI6IkptY0Q5c1M2T04zVk84c3oiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master
[3]: https://console.aws.amazon.com/codesuite/codebuild/projects/examples-lambda-at-edge/history
