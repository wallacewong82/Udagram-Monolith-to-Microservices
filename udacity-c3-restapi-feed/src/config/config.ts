export const config = {
  "dev": {
    "username": process.env.POSTGRESS_USERNAME,
    "password": process.env.POSTGRESS_PASSWORD,
    "database": process.env.POSTGRESS_DATABASE,
    "host":process.env.POSTGRESS_HOST,
    "dialect": "postgres",
    "aws_reigion": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket":process.env.AWS_MEDIA_BUCKET,
    "url": process.env.URL
    // "jwt_secret": process.env.JWT_SECRET
    // "username": "udagramwallydev",
    // "password": "udagramwallydev",
    // "database": "udagramwallydev",
    // "host": "udagramwallydev.cuhbthreiifm.ap-southeast-1.rds.amazonaws.com",
    // "dialect": "postgres",
    // "aws_reigion": "ap-southeast-1",
    // "aws_profile": "default",
    // "aws_media_bucket": "udagramwallydev"
  },
  "prod": {
    "username": process.env.POSTGRESS_USERNAME,
    "password": process.env.POSTGRESS_PASSWORD,
    "database": process.env.POSTGRESS_DATABASE,
    "host":process.env.POSTGRESS_HOST,
    "dialect": "postgres",
    "aws_reigion": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket":process.env.AWS_MEDIA_BUCKET,
    "url": process.env.URL
  },
  "jwt":{
    "secret": process.env.JWT_SECRET
  }
}
