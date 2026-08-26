# My Cupboard

## Bun 
To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.4.0. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

## Keystone Demo

This is a little demo of Node.js CMS [Keystone 6](https://keystonejs.com/) I built and includes:

- Model logic around recipes
- Custom page rendering all recipes from the GraphQL API
- Images hosted at S3

Their documentation includes a bunch of [great examples](https://keystonejs.com/docs/examples) to get you started.

### Install & Configure

```sh
pnpm i
```

Copy `.env.example` to `.env` and fill in the variables.

Create the S3 bucket on AWS, make it publicly accessible and use this bucket policy:
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowPublicRead",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::BUCKET_NAME/*"
        }
    ]
}
```

### Run

```sh
pnpm dev
```

