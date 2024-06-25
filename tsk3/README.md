### Turning a single consumer web-based Platforms into a SaaS

1. How can we design the system in a way that every Company will be able to serve games on their gaming site from their domain?
	1. Add auth login and handle route requests based on the incoming domain.
	2.  Point each domain to the gPlatform server.

3. What modification should be done to the users table at gPlatform to support this change? 
	1. Add a Company/Domain collection to db
	2. Add a `domainId` column to the users table with ref of new created collection
	3. Drop unique index for login information and add new index for `domainId` + login cred(email/acc name/eg)
    
3. Considering we have 1 backend cluster that serves all companies, how can we validate a user login on one gaming domain in such a way that it does not give access to a different gaming domain? (i.e. authenticating on site A, grants access to site A only)
	1. Set cookies with the Domain attribute for the specific company domain.
	2. Include `domainId` in tokens and validate it during requests.
	3. Validate user credentials against the `domainId` associated with the company

