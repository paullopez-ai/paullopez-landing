# Azure Hosting Setup 

Here's the plan for deploying your Next.js project to Azure Static Web Apps with automated GitHub
  deployments:

  Step 1: Verify Azure account and subscription access

  - Ensure you have an active Azure account
  - Verify you have the necessary permissions to create resources

  Step 2: Configure Next.js for Azure Static Web Apps deployment

  - Azure Static Web Apps supports Next.js with hybrid rendering
  - You may need to update next.config.ts to set output: 'standalone' or configure specific settings
  - For your project using Next.js 16.1.0, the default configuration should work

  Step 3: Create Azure Static Web App resource

  Option A - Azure Portal (Recommended for first time):
  - Navigate to Azure Portal → Create a resource → Static Web App
  - Choose your subscription and resource group

  Option B - Azure CLI:
  az staticwebapp create \
    --name paullopez-landing \
    --resource-group <your-resource-group> \
    --source https://github.com/paullopez-ai/paullopez-landing \
    --location "Central US" \
    --branch main

  Step 4: Connect to GitHub repository

  - During resource creation, authorize Azure to access your GitHub account
  - Select repository: paullopez-ai/paullopez-landing
  - Select branch: main

  Step 5: Configure build settings

  - App location: / (root of your repo)
  - API location: Leave empty (unless you have Azure Functions)
  - Output location: .next or out (depends on your Next.js configuration)

  Step 6: Review auto-generated GitHub Actions workflow

  - Azure automatically creates a workflow file at
  .github/workflows/azure-static-web-apps-<random>.yml
  - This workflow triggers on push to main and pull requests
  - It handles build and deployment automatically

  Step 7: Add Azure Static Web Apps configuration

  - Create staticwebapp.config.json at project root
  - Configure routes, redirects, and navigation fallback for Next.js

  Step 8: Test deployment

  - Push changes to trigger the workflow
  - Monitor the GitHub Actions tab for build progress
  - Verify the deployment at the provided Azure URL

  Step 9: Configure custom domain (optional)

  - Add custom domain in Azure Portal
  - Update DNS records with your domain provider

  Step 10: Set up environment variables

  - Add any required environment variables in Azure Portal
  - These will be available during build time

  Key Notes:
  - Every push to main will automatically trigger a deployment
  - Pull requests get preview deployments automatically
  - Build time is typically 2-5 minutes for Next.js apps