

#### What I have done in the repo
While following https://developers.cloudflare.com/ssl/origin-configuration/origin-ca/ I have
- pulled all IP CloudFlare IP ranges so I can (only) allow them
- created a cloudflare.key and .pem on their website (valid for 15 years)


#### What I have done (to the server)
- created an Ubuntu instance with ports 80, 443, and 22 open only
- added the ssh key of my mashine to the allowed lists
- generated key using `ssh-keygen`, added it to GitHub and verified using `ssh -T git@github.com`
- Cloned the repo, and then copied my certificate stuff (since it is in .gitignore) with:
scp ./nginx/cloudflare.key root@116.203.254.26:/root/applications/portfolio/nginx/cloudflare.key
scp ./nginx/cloudflare.pem root@116.203.254.26:/root/applications/portfolio/nginx/cloudflare.pem

#### Connecting to the instance
ssh root@116.203.254.26

