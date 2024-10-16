
### Implement CSRF Protection for API

**Context:**
The API serves a web application and needs to ensure protection against Cross-Site Request Forgery (CSRF) attacks.

**Current Situation:**
- The `protect_from_forgery` method works with `ActionController::Base` but not when inheriting from `ActionController::API`.
- Skipping CSRF protection can expose the application to security risks.

**Next Steps:**
1. Investigate alternative methods to implement CSRF protection in an API context, possibly using token-based authentication.
2. Assess whether to use `protect_from_forgery with: :null_session` or find a more suitable solution for the API serving a web application.

---
