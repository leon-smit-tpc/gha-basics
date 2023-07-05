# gha-basics
Create a project using github actions to get familiar with the workings

# steps to take
1. **Create a repository:** Start by creating a new repository on GitHub or use an existing one where you want to set up CI.

1. **Create a workflow file:** Inside your repository, navigate to the .github/workflows directory (create it if it doesn't exist), and create a new YAML file. You can name it something like ci.yml or any other descriptive name.

1. **Define the workflow:** Open the workflow file in an editor and add the following content as a starting point:

    ```yaml
    name: CI

    on:
    push:
        branches:
        - main

    jobs:
    build:
        runs-on: ubuntu-latest
        
        steps:
        - name: Checkout code
            uses: actions/checkout@v2
        
        - name: Build and test
            run: |
            # Add your build and test commands here
    ```

1. In this example, the workflow is triggered whenever you push changes to the main branch. It runs on an Ubuntu runner (ubuntu-latest) and contains a single job called build. Inside the build job, you can define the necessary steps to build and test your project.

1. Add build and test commands: Replace the comment # Add your build and test commands here with the actual commands needed to build and test your project. For example, if you're working with a Node.js project, you can use something like:

    ```yaml
    run: |
    npm install
    npm run build
    npm test
    ```