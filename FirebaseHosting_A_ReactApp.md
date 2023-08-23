# Hosting React Application on Firebase

## Build your Project
```
yarn build
```

## Start Firebase Hosting Setup
```
firebase init
```

## Follow these Steps
```
Are you ready to proceed? (Y/n) __Yes__

Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your        
choices. (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)
 ( ) Realtime Database: Configure a security rules file for Realtime Database and (optionally) provision default instance
 ( ) Firestore: Configure security rules and indexes files for Firestore
 ( ) Functions: Configure a Cloud Functions directory and its files
>(*) Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
 ( ) Hosting: Set up GitHub Action deploys
 ( ) Storage: Configure a security rules file for Cloud Storage
 ( ) Emulators: Set up local emulators for Firebase products

What do you want to use as your public directory? (public) __build__
Configure as a single-page app (rewrite all urls to /index.html)? (y/N) __No__
Set up automatic builds and deploys with GitHub? __Yes__
File build/index.html already exists. Overwrite? (y/N) __No__
```
### Complete Github Authentication

```
For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository) __GITHUBUSERNAME/REPONAME__
Set up the workflow to run a build script before every deploy? (y/N) __No__
GitHub workflow file for PR previews exists. Overwrite? firebase-hosting-pull-request.yml (y/N) __Yes__
Set up automatic deployment to your site's live channel when a PR is merged? (Y/n) __Yes__
What is the name of the GitHub branch associated with your site's live channel? (main) __main__
The GitHub workflow file for deploying to the live channel already exists. Overwrite? firebase-hosting-merge.yml (y/N) __Yes__
```
