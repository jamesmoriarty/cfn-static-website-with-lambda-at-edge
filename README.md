# cfn-static-website-with-edge-lambda

Static website hosted in S3 Bucket delivered via Cloudfront with Edge Lambda.

## Deploy

```
STACK_NAME=jamesmoriartyxyz \
WEBSITE_CERT_ARN=arn:aws:acm:us-east-1:467230181896:certificate/0c8c0f85-f68d-4063-abf2-3462a6a8a714 \
WEBSITE_HOSTED_ZONE=jamesmoriarty.xyz \
WEBSITE_DOMAIN=jamesmoriarty.xyz \
    bin/deploy
```
