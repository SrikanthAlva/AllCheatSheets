# Git Commands

## If git is in an older version follow the commands to upgrade to linux

```
git --version
sudo add-apt-repository -y ppa:git-core/ppa
sudo apt-get update
sudo apt-get install git -y
git --version
```

## Git Repo Commands

```
git init -b main
git add .
git commit -m "initial commit"
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git remote -v
git push origin main
```

### Optional

```
git remote rm origin 
```

## Set the Username and Email in git globally or per project

### Set the username/email for a specific repository
```
git config user.name "Your project specific name"
git config user.email "your@project-specific-email.com"
```
Verify your settings:
```
git config --get user.name
git config --get user.email
```

### Set the username/email globally
```
git config --global user.name "Your global username"
git config --global user.email "your@email.com"
```
Verify your settings:
```
git config --global --get user.name
git config --global --get user.email
```

### Branches

```
Creating New Branch
git checkout -b BRANCH_NAME
```
```
Checkout existing Branch
git checkout BRANCH_NAME

Staging Changes
git add .

Commiting Changes
git commit -m "COMMIT_MESSAGE"

Publishing local branch to GitHub

git push -u origin BRANCH_NAME
```

```
Deleting Branch on Github
git push origin --delete BRANCH_NAME
Deleting Branch locally
git branch --delete BRANCH_NAME
```

```
Fetch all remote branches
git fetch origin

List all branches
git branch -a

```

---


# The Perfect Commit

- Add the right changes
- Add a proper commit changes
- Use staging to manage this
- Git Add Patch can add parts of a file change.
- commit Message has two parts
    -   Subject - concise
    -   Body - decriptive 
-  while entering commit message Press Enter to Add the Body of the commit message


# Branching Strategies

-   Have a written convention to agree on Branching Workflow in the team

 
## Mainline Development (Always be Integrating)
## State,Release and Feature Branches

# Long Running Branches

Exists throughout the complete lifecycle of the project. Often they mirror stages in your dev life cycle

common convention: no direct commits

- Main
- QA
- Dev

# Short Lived Branches

-   for new features, bug fixes, refactoring, experiments
-   will be deleted after integration

# Find Active Ports and kill it

- `lsof -i tcp:5000`
- `kill -9 <PID>`





