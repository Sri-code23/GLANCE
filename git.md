## Git Commands from Clone to Push

### 1. Clone a Repository

Clone a repository into a new directory, creating a local copy of the entire project.
```bash
git clone <repository-url>
```
Explanation: This command is used to create a local copy of a remote repository.

### 2. Add File Contents to the Staging Area

Add file contents to the staging area, preparing them for the next commit.
```bash
git add <file-name> or git add .
```
Explanation: This command is used to add file contents to the staging area. The dot (.) is used to add all changes.

### 3. Display the Status of the Repository

Display the status of the repository, showing which changes have been staged, which haven't, and which files aren't being tracked.
```bash
git status
```
Explanation: This command is used to display the status of the repository.

### 4. Record Changes to the Repository

Record changes to the repository, creating a new commit with a meaningful message.
```bash
git commit -m "<commit-message>"
```
Explanation: This command is used to record changes to the repository.

### 5. Add a Remote Repository

Add a remote repository to the local repository, allowing for collaboration and synchronization.
```bash
git remote add <remote-name> <repository-url>
```
Explanation: This command is used to add a remote repository.

### 6. Display Information about the Remote Repository

Display information about the remote repository, including its URL and the branches it contains.
```bash
git remote -v
```
Explanation: This command is used to display information about the remote repository.

### 7. Update Remote Refs

Update remote refs along with associated objects, sending the committed changes to the remote repository.
```bash
git push <remote-name> <branch-name>
```
Explanation: This command is used to update remote refs.

## Git Commands from Init to Push
------------------------------------

### 1. Create an Empty Git Repository

Create an empty Git repository or reinitialize an existing one, setting up the necessary files and directories.
```bash
git init
```
Explanation: This command is used to create an empty Git repository.

### 2. Add File Contents to the Staging Area

Add file contents to the staging area, preparing them for the next commit.
```bash
git add <file-name>
```
Explanation: This command is used to add file contents to the staging area.

### 3. Display the Status of the Repository

Display the status of the repository, showing which changes have been staged, which haven't, and which files aren't being tracked.
```bash
git status
```
Explanation: This command is used to display the status of the repository.

### 4. Record Changes to the Repository

Record changes to the repository, creating a new commit with a meaningful message.
```bash
git commit -m "<commit-message>"
```
Explanation: This command is used to record changes to the repository.

### 5. Add a Remote Repository

Add a remote repository to the local repository, allowing for collaboration and synchronization.
```bash
git remote add <remote-name> <repository-url>
```
Explanation: This command is used to add a remote repository.

### 5. Update the URL of a Remote Repository

Update the URL of a remote repository, changing the location where the repository is accessed.
```bash
git remote set-url origin "<new-url>"
```
Explanation: This command is used to update the URL of a remote repository.

### 6. Display Information about the Remote Repository

Display information about the remote repository, including its URL and the branches it contains.
```bash
git remote -v
```
Explanation: This command is used to display information about the remote repository.

### 7. Update Remote Refs

Update remote refs along with associated objects, sending the committed changes to the remote repository.
```bash
git push <remote-name> <branch-name>
```
Explanation: This command is used to update remote refs.

### Git pull operations

### Git Commands Used

### 1. Change Directory

Change the current working directory to the specified path.
```bash
cd "PORTFOLIO_PAGE"
```
Explanation: This command is used to navigate to the PORTFOLIO_PAGE directory.

### 2. List Branches

List all local branches in the repository.
```bash
git branch
```
Explanation: This command is used to display the list of local branches. The asterisk (*) indicates the current branch.

### 3. Display Remote Repository Information

Display information about the remote repository, including its URL and the branches it contains.
```bash
git remote -v
```
Explanation: This command is used to display information about the remote repository. The -v option stands for verbose, which displays more detailed information.

### 4. Fetch Latest Changes

Fetch the latest changes from the remote repository, but do not merge them into the local repository.
```bash
git fetch
```
Explanation: This command is used to fetch the latest changes from the remote repository. It updates the remote refs and associated objects.

### 5. Pull Changes from Remote Repository

Pull changes from the remote repository and merge them into the local repository.
```bash
git pull origin master
```
Explanation: This command is used to pull changes from the remote repository and merge them into the local repository. The origin is the remote repository, and master is the branch being pulled.

### 6. Display Repository Status

Display the status of the repository, showing which changes have been staged, which haven't, and which files aren't being tracked.
```bash
git status
```
Explanation: This command is used to display the status of the repository. It shows which changes have been staged, which haven't, and which files aren't being tracked.



## git branches
### 1. Create a New Branch

Create a new branch from the current branch.
```bash
git branch <new-branch-name>
```
### 2. Switch to Another Branch

Switch to the specified branch.
```bash
git checkout <branch-name>
```
### 3. Merge a Branch into the Current Branch

Merge the specified branch into the current branch.
```bash
git merge <branch-name>
```
### 4. Delete a Branch

Delete the specified branch.
```bash
git branch -d <branch-name>
```
### 5. Rebase a Branch onto Another Branch

Rebase the specified branch onto another branch.
```bash
git rebase <other-branch-name>
```
### 6. Stash Changes

Stash the changes in the current branch, temporarily saving them away.
```bash
git stash
```
### 7. Apply Stashed Changes

Apply the stashed changes to the current branch.
```bash
git stash pop
```
### 8. List Stashed Changes

List the stashed changes.
```bash
git stash list
```
### 9. Apply a Stashed Change to a Specific Commit

Apply the stashed changes to a specific commit.
```bash
git stash apply <commit-hash>
```
### 10. Delete a Stashed Change

Delete a specific stashed change.
```bash
git stash drop <commit-hash>
```
### 11. Create a New Tag

Create a new tag with the specified message.
```bash
git tag -a <tag-name> -m "<tag-message>"
```
### 12. List All Tags

List all tags in the repository.

```bash
git tag
```
### 13. Push Tags to the Remote Repository

Push the tags to the remote repository.
```bash
git push origin --tags
```
### 14. Delete a Tag

Delete the specified tag.
```bash
git tag -d <tag-name>
```
### 15. Push a Tag to the Remote Repository

Push the specified tag to the remote repository.
```bash
git push origin <tag-name>
```
### 16. Create a New Remote Branch

Create a new remote branch.
```bash
git push origin <branch-name>
```
### 17. Delete a Remote Branch

Delete the specified remote branch.
```bash
git push origin --delete <branch-name>
```
### 18. Sync Local and Remote Branches

Sync the local and remote branches.
```bash
git fetch origin

git checkout master

git merge origin/master
```
### 19. List All Remote Branches

List all remote branches.
```bash
git branch -r
```
### 20. Checkout a Remote Branch

Checkout the specified remote branch.
```bash
git checkout -b <local-branch-name> origin/<remote-branch-name>
```
### 21. Create a New Remote Repository

Create a new remote repository.
```bash
git remote add <remote-name> <repository-url>
```
### 22. Update a Remote Repository

Update the specified remote repository.
```bash
git remote set-url origin <new-repository-url>
```
### 23. Delete a Remote Repository

Delete the specified remote repository.
```bash
git remote remove <remote-name>
```
### 24. Clone a Repository

Clone the specified repository.
```bash
git clone <repository-url>
```
### 25. Fetch Changes from a Remote Repository

Fetch changes from the specified remote repository.
```bash
git fetch <remote-name>
```
### 26. Pull Changes from a Remote Repository

Pull changes from the specified remote repository and merge them into the local repository.
```bash
git pull <remote-name> <branch-name>
```
### 27. Push Changes to a Remote Repository

Push changes to the specified remote repository.

```bash
git push <remote-name> <branch-name>
```


