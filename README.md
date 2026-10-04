
## Live Portfolio

This portfolio is configured for GitHub Pages deployment.

Once pushed to a GitHub repository named `personal-portfolio`, the site will be available at:

https://hasithadhananjaya.github.io/personal-portfolio/

If the repository name or GitHub username differs, update the `repoName` value in `vite.config.ts` to match your deployment target.

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

1. Push this project to a GitHub repository.
2. In GitHub, open the repository and go to Settings → Pages.
3. Select the branch and folder to publish, or use the included GitHub Actions workflow.
4. The workflow in `.github/workflows/deploy.yml` will build and publish the site automatically.

For your own repository, update the `repoName` constant in `vite.config.ts` if the repo name is different from `personal-portfolio`.
